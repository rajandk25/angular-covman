import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from './../../common/services/logged-user.service';
import { User } from 'src/app/common/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  welcomeMessage: string;
  loggedInUser: User;
  role: string;

  constructor(private loggedUserService: LoggedUserService) {
  }

  ngOnInit() {
    this.loggedInUser = this.loggedUserService.loggedInUser();
    this.role = this.loggedUserService.loggedInRole();

    console.log(this.loggedInUser);
    console.log(this.role);

    if(this.role=='PARENT') {
      this.welcomeMessage = this.loggedInUser.firstName + " " + this.loggedInUser.lastName;
    }
  }

}
