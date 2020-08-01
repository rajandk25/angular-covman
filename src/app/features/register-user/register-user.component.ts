import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormControl, FormGroup, FormBuilder } from '@angular/forms';
import { ToastService } from 'src/app/common/services/toast.service';
import { UserDataService } from 'src/app/common/services/user-data.service';
import { Parent } from './../../common/models/parent.model';
import { User } from './../../common/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-register-user',
  templateUrl: 'register-user.component.html',
  styleUrls: ['register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userform: FormGroup;

  isError: boolean = false;

  constructor(private userService: UserDataService, private router: Router, private fb: FormBuilder, private toastService: ToastService) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'firstName': new FormControl('', Validators.required),
      'lastName': new FormControl('', Validators.required),
      'emailId': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.compose([Validators.required, Validators.minLength(6)]))
    });

  }

  handleRegister() {
    this.isError = false;
    //create parent to pass to the service
    let parent: Parent = new Parent();

    let firstname: string = this.userform.controls["firstName"].value;
    let lastname: string = this.userform.controls["lastName"].value;
    let email: string = this.userform.controls["emailId"].value;
    let password: string = this.userform.controls["password"].value

    //parent need User object, so create that and set to the parent
    let user: User = new User();
    user.firstName = firstname;
    user.lastName = lastname;
    user.email = email;
    user.password = password;

    parent.user = user;

    //subscribe to the service to get the response
    this.userService.addParent(parent).subscribe(
      (data: Parent) => {
        
        if(data) {
          this.router.navigate(['/login']);
          this.toastService.addSingle("success", "", "Successfully registered.");
      }
    }, 
    (error: HttpErrorResponse) => {
      this.isError = true;
      this.toastService.addSingle("error", "", "Error while registering. Please retry. " + error.message);
    });
  }

  routeToLogin() {
    this.router.navigate(['/login']);
  }

}

