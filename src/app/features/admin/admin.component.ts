import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Employee } from 'src/app/common/models/employee.model';
import { UserDataService } from 'src/app/common/services/user-data.service';
import { SelectItem } from 'primeng/api';
import { LoggedUserService } from './../../common/services/logged-user.service';
import { User } from './../../common/models/user.model';
import { ToastService } from 'src/app/common/services/toast.service';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Modification } from 'src/app/common/models/modification.model';
import { School } from './../../common/models/school.model';

@Component({
  selector: 'app-admin',
  templateUrl: 'admin.component.html',
  styleUrls: ['admin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
  columns: any[];

  employees: Employee[];

  pageSize: number;

  sortOptions: SelectItem[];

  sortKey: string;

  sortField: string;

  sortOrder: number;

  loggedUser: User;

  isAdding: boolean = false;
  isUpdating: boolean = false;

  employeeToModify: Employee = null;

  schools: any[] = [];

  employeeForm: FormGroup;

  roleValues: any = ["TEACHER", "NURSE", "ADMIN"];
  roles: any = [];

  constructor(
    private toastService: ToastService,
    private userDataService: UserDataService, private loggedUserService: LoggedUserService,
    private fb: FormBuilder) { }

  ngOnInit() {

    this.loggedUser = this.loggedUserService.loggedInUser();

    this.pageSize = 10;

    this.columns = [
      { field: "user.firstName", header: 'First Name' },
      { field: "user.lastName", header: 'Last Name' },
      { field: "user.role", header: 'Role' },
      { field: "update", header: 'Update' },
      { field: "delete", header: 'Delete' }
    ];

    this.sortOptions = [
      {label: 'First Name', value: 'user.firstName'},
      {label: 'Last Name', value: 'user.lastName'},
      {label: 'Role', value: 'user.role'},
      {label: 'School', value: 'school.name'}
  ];

    this.userDataService.getAllEmployees().subscribe(employees => {
      this.employees = employees;
    });

    //get all schools to show in the dropdown to select
    if(this.schools.length == 0){
      this.userDataService.getAllSchools().subscribe(data =>  {
        if(data) {
          //modify teacher for dropdown

          for(let school of data) {
            this.schools.push({
              label : school.name,
              value: school
            });
          }
        }
      });
    }

    if(this.roles.length == 0) {
      for(let role of this.roleValues) {
        this.roles.push( {
          label: role,
          value: role
        });
      }
      
    }
  }

  getCellData(row: any, col: any): any {
    const nestedProperties: string[] = col.field.split('.');
    let value: any = row;
    for (const prop of nestedProperties) {
      value = value[prop];
    }
 
    return value;
  }

  startAdding(employee: Employee) {

    this.employeeForm = this.fb.group({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      role: new FormControl('', [Validators.required]),
      school: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });

    this.isAdding = true;
    this.isUpdating = false;
    this.employeeToModify = employee;
  }

  startUpdating(event, employee: Employee) {
    this.isAdding = false;
    this.isUpdating = true;
    this.employeeToModify = employee;

    this.employeeForm = this.fb.group({
      firstName: new FormControl(employee.user.firstName, Validators.required),
      lastName: new FormControl(employee.user.lastName, Validators.required),
      school: new FormControl(employee.school.name, [Validators.required]),
      email: new FormControl(employee.user.email, [Validators.required])
    });
  }

  addEmployee() {
    let employee = new Employee();
    let firstname: string = this.employeeForm.controls["firstName"].value;
    let lastname: string = this.employeeForm.controls["lastName"].value;
    let role: string = this.employeeForm.controls["role"].value;
    let school: School = this.employeeForm.controls["school"].value;
    let email: string = this.employeeForm.controls["email"].value;

    let modification: Modification = new Modification();
    modification.modifiedBy = this.loggedUser.email;

    employee.user = new User();
    employee.user.firstName = firstname;
    employee.user.lastName = lastname;
    employee.user.role = role;
    employee.user.email = email;
    employee.user.address =  school.address;
    //TODO: Do this in java with some logic
    employee.user.password = "12345678";

    employee.school = school;
    employee.students = [];
    employee.modification = modification;


    this.modifyEmployee('add', employee);
  }

  updateEmployee() {
    let firstname: string = this.employeeForm.controls["firstName"].value;
    let lastname: string = this.employeeForm.controls["lastName"].value;
    let school: School = this.employeeForm.controls["school"].value;
    let email: string = this.employeeForm.controls["email"].value;

    let modification: Modification = new Modification();
    modification.modifiedBy = this.loggedUser.email;

    this.employeeToModify.user.firstName = firstname;
    this.employeeToModify.user.lastName = lastname;
    this.employeeToModify.user.email = email;

    this.employeeToModify.school = school;
    this.employeeToModify.modification = modification;

    this.modifyEmployee('update', this.employeeToModify);
  }

  deleteEmployee(event, employee: Employee) {
    this.modifyEmployee('delete', employee);
  }

  cancelModification() {
    this.isUpdating = false;
    this.isAdding = false;
    this.employeeToModify = null;
    this.employeeForm = null;
  }

  //Used to add, update and delete employee
  modifyEmployee(operation: string, employee: Employee) {
    employee.modification.modifiedBy = this.loggedUser.email;

    this.userDataService.modifyEmployee(operation, employee).subscribe(result => {
      if(result) {
        this.employees = [];
          this.userDataService.getAllEmployees().subscribe(employees => {
            this.employees = employees;
          });
          this.toastService.addSingle("success", "", `Employee ${operation} successful.`);
          this.isAdding = false;
          this.isUpdating = false;
          this.employeeToModify = null;
          this.employeeForm = null;
      }
    },
      (error: HttpErrorResponse) => this.toastService.addSingle("error", "", "Problem modifying employee: " + error.message));
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
