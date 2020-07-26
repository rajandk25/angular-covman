import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/common/services/user-data.service';
import { ToastService } from 'src/app/common/services/toast.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoggedUserService } from 'src/app/common/services/logged-user.service';
import { User } from 'src/app/common/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string;
  password: string;
  isError: boolean;

  constructor(
    private userService: UserDataService, private router: Router,
    private loggedUserService: LoggedUserService, private toastService: ToastService
  ) { }

  ngOnInit() {
    this.userName = "";
    this.password = "";
    this.isError = false;
  }

  handleLogin() {
    this.isError = false;
    this.userService.getUser(this.userName, this.password).subscribe(
      (user: User) => {
        if(user) {
          this.loggedUserService.setUser(user);

          //Navigate to dashboard based on the user's role type
          if(user.role == 'PARENT') {
            this.router.navigateByUrl("/parent/dashboard");
          } else if(user.role == 'TEACHER') {
            this.router.navigateByUrl("/teachers/dashboard");
          }

        }
      }, 
      (error: HttpErrorResponse) => {
        this.isError = true;
        this.toastService.addSingle("error", "", "Error while logging in.");
      }
    );

  }

}
