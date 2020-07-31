import { Component, OnInit } from '@angular/core';
import { Student } from './../../common/models/student.model';
import { LoggedUserService } from 'src/app/common/services/logged-user.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserDataService } from 'src/app/common/services/user-data.service';
import { Employee } from 'src/app/common/models/employee.model';
import { ToastService } from 'src/app/common/services/toast.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ExposureIncident } from './../../common/models/incident.model';
import { SelectItem } from 'primeng/api';
import { Parent } from 'src/app/common/models/parent.model';

@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {

  incidentAddForm: FormGroup;
  incidentEditForm: FormGroup;

  students: Student[] = [];
  studentIds: number[] = [];

  employee: Employee;
  parent: Parent;

  exposureStatesValues: any = ["OPEN", "POSITIVE", "NEGATIVE", "RECOVERED"];

  exposureStates = [];
  dropDownStudents: any = [];

  loggedInUser: any;
  isAdding: boolean = false;
  isEditing: boolean = false;

  exposures: ExposureIncident[];

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  constructor(private loggedUserService: LoggedUserService, private fb: FormBuilder, 
    private userDataService: UserDataService, private toastService: ToastService) { 
      this.sortOptions = [
        {label: 'First Name', value: 'student.firstName'},
        {label: 'Last Name', value: 'student.lastName'},
        {label: 'State', value: 'exposureState'},
        {label: 'Recently Updated', value: '!modification.modifiedAt'}
    ];
     }

  ngOnInit(): void {
    this.loggedInUser = this.loggedUserService.loggedInUser();
    this.createExposureDropdown();
    this.createFormGroup();

    this.setStudentsAndExposures();
  }

  //get all exposures for all the students for this employee
  populateExposures() {
    if(this.loggedInUser.role == 'TEACHER') {
      this.userDataService.getExposuresForStudents(this.studentIds).subscribe(data => this.exposures = data);
    } // for nurse, admin , they have to search for a particular student
    else if(this.loggedInUser.role == 'PARENT') {
      this.userDataService.getExposuresForStudents(this.studentIds).subscribe(data => this.exposures = data);
    }

  }

  setStudentsAndExposures() {
    if(this.loggedInUser.role == 'TEACHER')
    this.userDataService.getEmployeeByUserId(this.loggedInUser.id).subscribe(employee => {
      if(employee) {
        this.employee = employee;
        for(let student of  employee.students) {
          this.studentIds.push(student.id);

          this.dropDownStudents.push({
            label: student.firstName + " " + student.lastName,
            value: student
          });
        }

        this.populateExposures();
      }
      
    });
    else if(this.loggedInUser.role == 'PARENT')
    this.userDataService.getParentByUserId(this.loggedInUser.id).subscribe(parent =>{
      if(parent) {
        this.parent = parent;
        for(let student of parent.students) {
          this.studentIds.push(student.id);
        }
        this.populateExposures();
      }
    });
    
  }
  

  addIncident() {
    this.isAdding =  true;
  }

  //create an incident object and pass to the service and handle response
  handleAddIncident() {
    let selectedStudent: Student = this.incidentAddForm.controls["student"].value;
    let exposureState: string = this.incidentAddForm.controls["exposureState"].value;
    let comments: string = this.incidentAddForm.controls["comments"].value;
    
    if(selectedStudent && exposureState && selectedStudent && this.employee) {
      let incident: ExposureIncident = new ExposureIncident();
      incident.employee = this.employee;
      incident.student = selectedStudent;
      incident.comments = comments;
      incident.exposureState = exposureState;

      this.userDataService.addIncident(incident).subscribe(data => {
        if(data) {
          this.toastService.addSingle("success", "", "Student added incident.");
          this.isAdding = false;
          this.populateExposures();
        }
      },
      (error: HttpErrorResponse) => {
        this.toastService.addSingle("error", "", "Unable to add incident. Please try again. "  +error.message);
      });
    }
  }

  updateExposure(event: any, exposure: ExposureIncident) {


  }

  cancelAddIncident() {
    this.isAdding =  false;
  }

  createExposureDropdown() {
    for(let state of this.exposureStatesValues) {
      this.exposureStates.push({
        label: state,
        value: state
      });
    }
  }

  createFormGroup() {
    this.incidentAddForm = this.fb.group({
      comments: new FormControl('', Validators.required),
      student: new FormControl(Validators.required),
      exposureState: new FormControl(Validators.required)
    });
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
    }
    else {
        this.sortOrder = 1;
        this.sortField = value;
    }
}

}
