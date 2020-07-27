import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { IncidentsComponent } from './incidents.component';

const routes: Routes = [
    {
        path: '',
        component: IncidentsComponent
    }
];

@NgModule({
    imports: [
    RouterModule.forChild(routes),
        DashboardModule
    ],
    exports: [RouterModule]
})
export class IncidentRoutingModule { }