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
import { SymptomService } from './../../common/services/symptom-data.service';

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

  //either parent or employee (not the user object)
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
    { field: 'teacher', header: 'Teacher' },
    { field: 'checkin', header: 'Check-In Status' },
    { field: 'isAdmittable', header: 'Safe to Report to School' },
    { field: 'symptomToDisplay', header: 'Symptoms' }
  ];

  constructor(private loggedUserService: LoggedUserService, private userDataService: UserDataService,
    private fb: FormBuilder, private toastService: ToastService, private symptomService: SymptomService) {
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
            this.getDailyCheckInForStudent(student);
          }
        }

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

  //this gets checkin for each student and update their status
  getDailyCheckInForStudent(student: Student) {
    //call symtpom service to get today's symptoms
    this.symptomService.getCheckInForToday(student.id).subscribe(checkIn => {
      if(checkIn) {
        student.symptomAnswers = checkIn;
        this.createDisplayableSymptomList(checkIn, student);
      }

      this.students.push(student);
      this.updateStudentEligibility(student);
    });
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
        this.updateStudentEligibility(student);
        this.students.push(student);
        this.isAdding = false;
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

  //Hierarchy of components ==> 
  // Parent Component 
  //                ==> Dashboard component 
  //                                      ==> CheckIn component
  //this method is run when check-in component emits an event when it gets data from backend
  //Check-in component is the one at start backend check-in call and its only one who know what happened at backend
  //If check-in component passed = false, it means check-in had failed
  // If we got passed = true from check-in, it means check-in was good and we can proceed to refresh the dashboard 
  // and also update concerned student and overall parent/teacher attention status
  handleCheckInResult(passed: boolean) {
    if(passed) {
      this.toastService.addSingle("success", "", "Student Checked in successfully");
      this.checkInResult.emit(true);
      this.updateCheckIn();
    } else {
      this.toastService.addSingle("success", "", "Student Check in failed.");
    }
  }

  //handles refresh  for check in. CheckIn component tells that it has done the check-in, so we take action here to refresh dashboard
  updateCheckIn() {
    //get the student from existin Student [] whose check In just happened.
    //Update this student in the array
    let existingStudent: Student = this.students.filter(std => std.id === this.studentToCheckIn.id)[0];
    console.log("existing: " + existingStudent);

    //if we found the student in existing (this is just double check to make sure we are on correct student)
    if(existingStudent.id == this.studentToCheckIn.id) {

      //Since we just did checkIn, get it from backend to confirm it really went thru
      //Update the student in the students[] and also the studentToCheckIn
      //CheckIn is complete only if we get the check in back from the backend otherwise there is some problem
      this.symptomService.getCheckInForToday(existingStudent.id).subscribe(checkIn => {
        if(checkIn) {
          this.studentToCheckIn.symptomAnswers = checkIn;
          existingStudent.symptomAnswers = checkIn;
          //add symptom list for easy display
          this.createDisplayableSymptomList(checkIn, existingStudent);
          //update students status
          this.updateStudentEligibility(existingStudent);
          this.isCheckingIn = false;

          console.log("Updated Student: " + existingStudent);
        }
      });
    }
  }

  //create symptom list to display in table
  createDisplayableSymptomList(checkIn: SymptomAnswers, existingStudent: Student) {
    checkIn.symptomAnswer.forEach(symptom => {
      //question exists for this symptom e.g. temperature doesn't have question in it
      if(symptom.symptomQuestion) {
        //if this field has some value
        if(existingStudent.symptomToDisplay) {
          existingStudent.symptomToDisplay = existingStudent.symptomToDisplay + ", " + symptom.symptomQuestion.description;
        } else {
          existingStudent.symptomToDisplay = symptom.symptomQuestion.description;
        }
    }
    });
  }

  /*
  This is to update the student object to see if they are admittable. Also, it updates the overall status for parent/teachers
  in case there are more than one students. 
  Attention is needed even if single student in not admittable
  */
  updateStudentEligibility(student: Student) {
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
