import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/common/services/user-data.service';
import { Parent } from 'src/app/common/models/parent.model';
import { LoggedUserService } from 'src/app/common/services/logged-user.service';

@Component({
  selector: 'app-parents',
  templateUrl: './parents.component.html',
  styleUrls: ['./parents.component.css']
})
export class ParentsComponent implements OnInit {

  parent: Parent;

  constructor(private userDataService: UserDataService, private loggedUserService: LoggedUserService) { }

  ngOnInit(): void {
    let loggedInUser = this.loggedUserService.loggedInUser();

    this.userDataService.getParentByUserId(loggedInUser.id).subscribe((parent: Parent) => {
      console.log(parent);

      //if parent exists, then get their students
      if(parent) {
        this.parent = parent;
      }
    });
  }

  //handles refresh  for parent
  handleCheckInResultForParent() {
    this.userDataService.getParentByUserId(this.parent.user.id).subscribe((parent: Parent) => {
      console.log(parent);
      this.parent = parent;
    });
  }

}
