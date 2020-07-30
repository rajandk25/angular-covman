import { Component, OnInit } from '@angular/core';
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
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {

  teacher: Employee;

  constructor(private userDataService: UserDataService, private loggedUserService: LoggedUserService) { }

  ngOnInit(): void {
    let loggedInUser = this.loggedUserService.loggedInUser();

    this.userDataService.getEmployeeByUserId(loggedInUser.id).subscribe((teacher: Employee) => {
      console.log(teacher);

      //if teacher exists, then get their students
      if(teacher) {
        this.teacher = teacher;
        if(teacher.students) {
          for(let student of teacher.students) {
            student.teacher = teacher.user.firstName + " " + teacher.user.lastName;
          }
        }
      } else {
        let employee : Employee = new Employee();
        employee.user = loggedInUser;
        employee.students = [];
      }
    });
  }

  //handles refresh  for teacher
  handleCheckInResultForTeacher() {
    this.userDataService.getEmployeeByUserId(this.teacher.user.id).subscribe((teacher: Employee) => {
      this.teacher = teacher;
    });
  }
}
