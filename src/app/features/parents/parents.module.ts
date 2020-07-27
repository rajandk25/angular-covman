import { NgModule } from '@angular/core';
import { AppCommonModule } from 'src/app/app.common.module';
import { CheckInModule } from './../check-in/check-in.module';
import { ParentsComponent } from './parents.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { CommonModule } from '@angular/common';
import { ParentRoutingModule } from './parent.routing';

@NgModule({
  declarations: [ParentsComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    CheckInModule,
    ParentRoutingModule,
    DashboardModule
  ]
})
export class ParentsModule { }
