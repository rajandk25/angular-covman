import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LoggedUserService } from './../../common/services/logged-user.service';
import { User } from 'src/app/common/models/user.model';
import { UserDataService } from 'src/app/common/services/user-data.service';
import { Parent } from 'src/app/common/models/parent.model';
import { Student } from './../../common/models/student.model';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Employee } from 'src/app/common/models/employee.model';
import { ToastService } from 'src/app/common/services/toast.service';
import { HttpErrorResponse } from '@angular/common/http';
import { SymptomAnswers } from './../../common/models/symptomAnswers.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  welcomeMessage: string;
  loggedInUser: User;
  role: string;
  students: any[] = [];
  isAdding: boolean = false;
  isCheckingIn: boolean = false;

  studentAddForm: FormGroup;
  teachers: Array<any> = [];
  studentToCheckIn: Student;
  needsAttention: boolean = false;

  canAddStudent: boolean = false;

  @Input()
  user: any;

  @Output()
  studentAddResult = new EventEmitter<boolean>();

  @Output()
  checkInResult = new EventEmitter<boolean>();

  readonly columns: any[] = [
    { field: 'firstName', header: 'First Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'age', header: 'Age' },
    { field: 'grade', header: 'Grade' },
    { field: 'checkin', header: 'Check-In Status' },
    { field: 'isAdmittable', header: 'Safe to Report to School' }
  ];

  constructor(private loggedUserService: LoggedUserService, private userDataService: UserDataService,
    private fb: FormBuilder, private toastService: ToastService) {
  }

  ngOnInit() {
    this.loggedInUser = this.loggedUserService.loggedInUser();
    this.role = this.loggedInUser.role;

    console.log("logged in user " + this.loggedInUser);

    if(this.user) {
      if(this.role=='PARENT') {
        this.canAddStudent = true;

        this.studentAddForm = this.fb.group({
          firstName: new FormControl('', Validators.required),
          lastName: new FormControl('', Validators.required),
          grade: new FormControl('', [Validators.required]),
          age: new FormControl('', [Validators.required]),
          teacher: new FormControl('', [Validators.required])
        });
      }

      this.welcomeMessage = "Welcome, " + this.loggedInUser.firstName + " " + this.loggedInUser.lastName;
      this.initializeWithUserData();
    }
  }


  //This method handles the logic when user is parent
  //loads user's students, all teachers and update eligibility for each student.
  initializeWithUserData() {
      //if parent exists, then get their students
        if(this.user.students) {
          for(let student of this.user.students) {
            this.students.push(student);
          }
        }
        console.log("Parent students: " + this.students);
        this.updateStudentEligibility();

        //get all teachers to show in the dropdown to select
        if(this.teachers.length == 0){
          this.userDataService.getAllTeachers().subscribe(data =>  {
            if(data) {
              //modify teacher for dropdown

              for(let teacher of data) {
                this.teachers.push({
                  label : teacher.user.firstName + " " + teacher.user.lastName,
                  value: teacher
                });
              }
            }
          });
        }
  }

  //shows the add student form
  addStudent() {
      this.isAdding = true;
  }

  cancelAddStudent() {
    this.isAdding = false;
  }

  handleAddStudent() {
    let student: Student = new Student();

    let firstname: string = this.studentAddForm.controls["firstName"].value;
    let lastname: string = this.studentAddForm.controls["lastName"].value;
    let age: number = this.studentAddForm.controls["age"].value;
    let grade: number = this.studentAddForm.controls["grade"].value;
    let teacher: Employee = this.studentAddForm.controls["teacher"].value;

    student.firstName = firstname;
    student.lastName = lastname;
    student.age = age;
    student.grade = grade;

    //this.user is either Parent / Employee and it has a user object in it
    if(this.user.user.role == 'PARENT') {
      student.parent = this.user;
    }
    student.employee = [teacher];
    student.school = teacher.school;

    this.userDataService.addStudent(student).subscribe(data => {
      if(data) {
        this.toastService.addSingle("success", "", "Student added successfully");
        this.students.push(data);
        this.isAdding = false;
        this.updateStudentEligibility();
      }
    },
    (error: HttpErrorResponse) => {
      this.toastService.addSingle("error", "", "Unable to add student. Please try again. "  +error.message);
    });
  }

  setStudentToCheckIn(student: Student) {
    this.studentToCheckIn = student;
    this.isCheckingIn = true;
  }

  handleCheckInResult(passed: boolean) {
    if(passed) {
      this.toastService.addSingle("success", "", "Student Checked in successfully");
      this.checkInResult.emit(true);
      this.updateCheckIn();
    } else {
      this.toastService.addSingle("success", "", "Student Check in failed.");
    }
  }

  //handles refresh  for check in
  updateCheckIn() {
    if(this.user.students) {
        for(let student of this.user.students) {
          if(student.id == this.studentToCheckIn.id) {
            this.studentToCheckIn.symptomAnswers = student.symptomAnswers;
            this.isCheckingIn = false;
          }
        }
    }

    this.updateStudentEligibility();
  }

  //handles if student is allowed to come and if there at least one student with positive symptoms
  updateStudentEligibility() {
    this.needsAttention = false;
    for(let student of this.students) {
      //if no checkin exists, then not good to come
      student.isAdmittable = true;

      //update admittance based on the student symptom data
      if(!student.symptomAnswers) {
        console.log("Not checked in yet");
        student.isAdmittable = false;
        this.needsAttention = true;
      }
      //if symptoms exists, then do not come
      else {
        let todayCheckin: SymptomAnswers = student.symptomAnswers;
        for(let symptom of todayCheckin.symptomAnswer) {
          console.log("y/n" + symptom.yesOrNo);
          if(symptom.yesOrNo) {
            if(symptom.symptomQuestion && symptom.symptomQuestion.description !== 'No Symptoms') {
              console.log("is Admittable" + false);
              student.isAdmittable = false;
              this.needsAttention = true;
            }
          }
        }
      }
    }
  }

}
