import { Routes, RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { DashboardModule } from "../dashboard/dashboard.module";
import { NgModule } from "@angular/core";



const routes: Routes = [
    {
        path: '',
        component: ProfileComponent
    }
];
@NgModule({
    imports: [
    RouterModule.forChild(routes),
        DashboardModule
    ],
    exports: [RouterModule]
})
export class ProfileRoutingModule { }