import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Student } from 'src/app/common/models/student.model';
import { Parent } from 'src/app/common/models/parent.model';
import { LoggedUserService } from 'src/app/common/services/logged-user.service';
import { UserDataService } from 'src/app/common/services/user-data.service';
import { ToastService } from 'src/app/common/services/toast.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  studentUpdateForm: FormGroup;
  students: Student[] = [];
  parent: Parent;
  loggedInUser: any;
  isEditing: boolean = false;
  canEditStuent: boolean =false;
  role: any;
  user: any;

  studentToUpdate: Student;

  teachers: any = [];

  readonly columns: any[] = [
    { field: 'firstName', header: 'First Name' },
    { field: 'lastName', header: 'Last Name' },
    { field: 'age', header: 'Age' },
    { field: 'grade', header: 'Grade' },
    { field: 'teacher', header: 'Teacher' },
    { field: 'update', header: 'Update' },
    { field: 'delete', header: 'Delete' }
  ];

  constructor(private loggedUserService: LoggedUserService, private fb: FormBuilder, 
    private userDataService: UserDataService, private toastService: ToastService) {
      
     }

  ngOnInit(): void {
    this.initializeParentAndStudents();
  }

  initializeParentAndStudents() {
    let loggedInUser = this.loggedUserService.loggedInUser();
    this.userDataService.getParentByUserId(loggedInUser.id).subscribe((parent: Parent) => {
      console.log(parent);

      if(parent) {
        this.parent = parent;

        if(parent.students) {
          for(let student of parent.students) {
            let teacher = student.employee.filter(emp => emp.user.role === 'TEACHER')[0];
            student.teacher = teacher.user.firstName + " " + teacher.user.lastName;

            this.students.push(student);
          }

          if(this.teachers.length == 0) {
              this.getAllTeachers();
          }
        }
      } 
    });
  }

  //make teacher dropdown if not already available on the class level
  getAllTeachers() {
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

  //create form and set which student is getting updated
  startStudentUpdate(student: Student) {
    this.isEditing =  true;
    this.studentToUpdate = student;
    this.createFormGroup(student);
  }

  //get Updated values from the form and set those to the student thats sent to the backend
  //update student when user click update link and update the student list by reloading parent
  // also repopulate student [] maintained on the page for easy retrieval
  handleUpdateStudent() {
    let firstname: string = this.studentUpdateForm.controls["firstName"].value;
    let lastname: string = this.studentUpdateForm.controls["lastName"].value;
    let age: number = this.studentUpdateForm.controls["age"].value;
    let grade: number = this.studentUpdateForm.controls["grade"].value;
    let teacher: any = this.studentUpdateForm.controls["teacher"].value;

    this.studentToUpdate.employee = [];
    this.studentToUpdate.firstName = firstname;
    this.studentToUpdate.lastName = lastname;
    this.studentToUpdate.age = age;
    this.studentToUpdate.grade = grade;
    this.studentToUpdate.employee = [teacher];

    console.log("updated student: " + this.studentToUpdate);

    this.userDataService.updateStudent(this.studentToUpdate).subscribe(updatedStudent => {
      if(updatedStudent) {
        //reset current students for this page and reload them all again to prevent doubling up
        this.students = [];
        this.initializeParentAndStudents();
        this.isEditing =  false;
        this.studentToUpdate = null;
        this.toastService.addSingle("success", "", "Student updated successfully");
      }
    },
    (error: HttpErrorResponse) => this.toastService.addSingle("error", "", "Problem updating student: " + error.message));

  }

  cancelUpdateStudent() {
    this.isEditing = false;
    this.studentToUpdate = null;
  }

  //delete student when user click delete and update the student list by reloading parent
  // also repopulate student [] maintained on the page for easy retrieval
  deleteStudent(student: Student) {
    this.userDataService.deleteStudent(student).subscribe(deleted => {
      if(deleted) {
        this.students = [];
        this.initializeParentAndStudents();
        this.toastService.addSingle("success", "", "Student deleted successfully");
      }
    },
    (error: HttpErrorResponse) => this.toastService.addSingle("error", "", "Problem deleting student: " + error.message));
  }

  createFormGroup(student: Student) {
    this.studentUpdateForm = this.fb.group({
      firstName: new FormControl(student.firstName, Validators.required),
      lastName: new FormControl(student.lastName, Validators.required),
      grade: new FormControl(student.grade, [Validators.required]),
      age: new FormControl(student.age, [Validators.required]),
      teacher: new FormControl(student.teacher, [Validators.required])
    });
  }

  editProfile(){
    isEditing: true;
  }

  handleEditProfile() {

  }

}
