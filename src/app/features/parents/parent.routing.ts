import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentsComponent } from './parents.component';
import { DashboardModule } from './../dashboard/dashboard.module';

const routes: Routes = [
    {
        path: '',
        component: ParentsComponent
    }
];

@NgModule({
    imports: [
    RouterModule.forChild(routes),
        DashboardModule
    ],
    exports: [RouterModule]
})
export class ParentRoutingModule { }