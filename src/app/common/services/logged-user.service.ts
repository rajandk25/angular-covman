import { Injectable } from "@angular/core";
import { SessionService } from 'src/app/common/services/session.service';


@Injectable({
    providedIn: 'root',
})
export class LoggedUserService {

    constructor(private sessionService: SessionService) {
    }

    public setUser(user: any) {
        this.sessionService.setItem("loggedInUser", user);
        this.sessionService.setItem("loggedInRole", user.role);
    }

    public loggedInUser() {
        return this.sessionService.getItem("loggedInUser");
    }

    public loggedInRole(): string {
        return this.sessionService.getItem("loggedInRole");
    }

    public logout() {
        this.sessionService.removeItem("loggedInUser");
        this.sessionService.removeItem("loggedInRole");
    }

}