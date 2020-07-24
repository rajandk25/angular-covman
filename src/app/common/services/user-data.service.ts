import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { Parent } from './../models/parent.model';
import { environment } from './../../../environments/environment';
import { map, catchError } from 'rxjs/operators';

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

    /**
     * 
     * @param error Handle error from backend
     */
    public handleError(error: HttpErrorResponse) {
      return throwError(error);
    }
}
