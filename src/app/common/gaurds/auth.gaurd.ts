import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LoggedUserService } from 'src/app/common/services/logged-user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private loggedUserService: LoggedUserService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        var user = this.loggedUserService.loggedInUser();
        //if user is logged In, continue
        if (user != null) {
            return true;
        }

        // go to login with current url to come back after login
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
