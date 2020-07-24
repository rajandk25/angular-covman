import { Component, OnInit } from '@angular/core';
import { LoggedUserService } from './../../common/services/logged-user.service';
import { User } from 'src/app/common/models/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  welcomeMessage: any[] = [];
  loggedInUser: User;
  role: string;

  constructor(private loggedUserService: LoggedUserService) {
  }

  ngOnInit() {
    this.loggedInUser = this.loggedUserService.loggedInUser();
    this.role = this.loggedUserService.loggedInRole();

    if(this.role=='PARENT') {
      let parentName = this.loggedInUser.firstName + " m " + this.loggedInUser.lastName;
      this.welcomeMessage.push({severity:'info', summary:"Welcome, ", detail:parentName});
    }
  }

}
