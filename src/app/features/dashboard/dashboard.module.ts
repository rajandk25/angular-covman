import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { DashboardComponent } from 'src/app/features/dashboard/dashboard.component';
import { CheckInModule } from './../check-in/check-in.module';

@NgModule({
  imports: [
    CommonModule,
    AppCommonModule,
    CheckInModule
  ],
  declarations: [DashboardComponent],
  exports: [DashboardComponent]
})
export class DashboardModule { }