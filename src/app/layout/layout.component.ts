import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { SidebarMenuItem } from 'src/app/common/models/sidebar-menu-item.model';
import { SessionService } from 'src/app/common/services/session.service';
import { Router } from '@angular/router';
import { LoggedUserService } from 'src/app/common/services/logged-user.service';

@Component({
  selector: 'app-layout',
  templateUrl: 'layout.component.html',
  styleUrls: ['layout.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LayoutComponent implements OnInit {

    items: SidebarMenuItem[];
    selectedItem: string;
    visible: boolean;
    email: string;

    constructor(private router: Router,
        private sessionService: SessionService, private loggedUserService: LoggedUserService) { }

    ngOnInit() {
        this.email = this.sessionService.getItem("loggedInUser").email;
        this.items = this.getMenuList();

        var activeMenu = this.sessionService.getItem("active-menu-item");
        if (activeMenu) {
            this.selectedItem = activeMenu;
        } else {
            this.selectedItem = "Home";
        }
    }

    handleMenuItemClick(menu: SidebarMenuItem) {
        if (menu.routerLink == undefined || menu.routerLink == null || menu.routerLink == "") {
            return;
        }
        this.selectedItem = menu.label;
        this.sessionService.setItem("active-menu-item", menu.label);
        this.router.navigateByUrl(menu.routerLink);
    }

    getMenuList(): SidebarMenuItem[] {

        let role = this.loggedUserService.loggedInRole();

        if(role=='PARENT') {
            return [
                {
                    label: 'Home',  routerLink: '/parent/dashboard', icon: 'pi pi-home'
                },
                {
                    label: 'Incidents',  routerLink: '/parent/incidents', icon: 'pi pi-bars'
                },
                {
                    label: 'Profile',  routerLink: '/parent/profile', icon: 'pi pi-user'
                }
            ]
        } else if(role=='TEACHER') {
            return [
                {
                    label: 'Home',  routerLink: '/teachers/dashboard', icon: 'pi pi-home'
                },
                {
                    label: 'Incidents',  routerLink: '/teachers/incidents', icon: 'pi pi-bars'
                }
            ]
        } else if(role=='ADMIN') {
            return [
                {
                    label: 'Employees',  routerLink: '/admin/dashboard', icon: 'pi pi-home'
                },
                {
                    label: 'Incidents',  routerLink: '/admin/incidents', icon: 'pi pi-bars'
                }
            ]
        }
    }

    logout() {
      this.loggedUserService.logout();
      this.sessionService.removeItem('active-menu-item');
      this.router.navigate(['/login']);
    }

}
