import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { environment } from './../../../environments/environment';
import { map, catchError } from 'rxjs/operators';
import { Student } from './../models/student.model';
import { SymptomAnswers } from './../models/symptomAnswers.model';
import { SymptomQuestion } from './../models/symptomQuestion.model';

@Injectable({
    providedIn: 'root',
})
export class SymptomService {

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
    public doDailyCheckIn(student: Student) : Observable<SymptomAnswers> {
      return this.httpClient.post<SymptomAnswers>(environment.checkIn, student, {
        headers: this.corsHeaders
      })
        .pipe(
          map(response => {return response}),
          catchError(this.handleError)
        );
    }

    //get all symptom questions
    public getQuestions(): Observable<SymptomQuestion[]> {
      let url = environment.questions;
      return this.httpClient.get<SymptomQuestion[]>(url, {
        headers: this.corsHeaders
      })
      .pipe(
        map(response => {return response}),
        catchError(this.handleError)
      );
    }

    //get today's checkIn for this student
    public getCheckInForToday(studentId: number): Observable<SymptomAnswers> {
      let url = environment.checkIn + "/" + studentId;
      return this.httpClient.get<SymptomAnswers>(url, {
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
