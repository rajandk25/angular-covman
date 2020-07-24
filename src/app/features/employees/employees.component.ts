import { Component, OnInit, AfterViewInit } from '@angular/core';
import { EmployeeDataService } from 'src/app/features/employees/employee-data.service';
import { Employee } from 'src/app/common/models/employee.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: 'employees.component.html',
  styleUrls: ['employees.component.css']
})
export class EmployeesComponent implements OnInit {
  columns: any[];

  employees: Employee[];

  pageSize: number;

  constructor(
    private router: Router,
    private employeeService: EmployeeDataService) { }

  ngOnInit() {

    this.pageSize = 10;

    this.columns = [
      { field: 'Name', header: 'Name' },
      { field: 'Department', header: 'Department' },
      { field: 'Address', header: 'Address' },
      { field: 'Age', header: 'Age' }
    ];

    this.employees = this.employeeService.getEmployeeList();
  }

  goToDepartmentDetails(department: number) {
    this.router.navigate(["/main/departments/department-detail/"+department]);
  }
}
