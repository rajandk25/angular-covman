import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Parent } from './../models/parent.model';
import { environment } from './../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Employee } from 'src/app/common/models/employee.model';
import { Student } from './../models/student.model';
import { ExposureIncident } from '../models/incident.model';

@Injectable({
    providedIn: 'root',
})
export class UserDataService {

    constructor(private httpClient: HttpClient) {
    }

    readonly corsHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    /**
     * Add a new parent user from UI
     * @param parent 
     */
    public addParent(parent: Parent) : Observable<Parent> {
      return this.httpClient.post<Parent>(environment.parents, parent, {
        headers: this.corsHeaders
      })
        .pipe(
          map(response => {return response}),
          catchError(this.handleError)
        );
    }

    addIncident(incident: ExposureIncident): Observable<ExposureIncident> {
      return this.httpClient.post<ExposureIncident>(environment.employees + "/exposures/", incident, {
        headers: this.corsHeaders
      })
        .pipe(
          map(response => {return response}),
          catchError(this.handleError)
        );
    }

    /**
     * Get user from the backend
     * 
     * @param email 
     * @param password 
     */
    public getUser(email: string, password: string) {
      let url = environment.users + "/" + email + "/" + password;
      return this.httpClient.get(url, {
        headers: this.corsHeaders
      })
      .pipe(
        map(response => {return response}),
        catchError(this.handleError)
      );
    }

    //get parent by its user id
    public getParentByUserId(userId: number): Observable<Parent> {
      let url = environment.parents + "/user/" + userId;
      return this.httpClient.get<Parent>(url, {
        headers: this.corsHeaders
      })
      .pipe(
        map(response => {return response}),
        catchError(this.handleError)
      );
    }

    //gets an employee based on the id of the user it has
    public getEmployeeByUserId(employeeUserId: any): Observable<Employee> {
      let url = environment.employees + "/user/" + employeeUserId;
      return this.httpClient.get<Employee>(url, {
        headers: this.corsHeaders
      })
      .pipe(
        map(response => {return response}),
        catchError(this.handleError)
      );
    }

    //get all the teachers for parent to choose from
    public getAllTeachers(): Observable<Employee[]> {
      let url = environment.teachers;
      return this.httpClient.get<Employee[]>(url, {
        headers: this.corsHeaders
      })
      .pipe(
        map(response => {return response}),
        catchError(this.handleError)
      );
    }

    getExposuresForStudents(studentIds: number[]): Observable<ExposureIncident[]> {
      let url = environment.employees + "/exposures/students"
      return this.httpClient.post<ExposureIncident[]>(url, studentIds, {
        headers: this.corsHeaders
      })
      .pipe(
        map(response => {return response}),
        catchError(this.handleError)
      );
    }

    public addStudent(student: Student) : Observable<Student> {
      return this.httpClient.post<Student>(environment.students, student, {
        headers: this.corsHeaders
      })
        .pipe(
          map(response => {return response}),
          catchError(this.handleError)
        );
    }

    /**
     * 
     * @param error Handle error from backend
     */
    public handleError(error: HttpErrorResponse) {
      return throwError(error);
    }
}
