import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { DashboardRoutingModule } from 'src/app/features/dashboard/dashboard.routing';
import { DashboardComponent } from 'src/app/features/dashboard/dashboard.component';
import { CheckInModule } from './../check-in/check-in.module';

@NgModule({
  imports: [
  CommonModule,
    DashboardRoutingModule,
    AppCommonModule,
    CheckInModule
  ],
  declarations: [DashboardComponent]
})
export class DashboardModule { }