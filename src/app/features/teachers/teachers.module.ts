import { NgModule } from '@angular/core';
import { TeachersComponent } from './teachers.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { CheckInModule } from './../check-in/check-in.module';
import { TeachersRoutingModule } from './teachers.routing';
import { DashboardModule } from './../dashboard/dashboard.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [TeachersComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    CheckInModule,
    TeachersRoutingModule,
    DashboardModule
  ]
})
export class TeachersModule { }
