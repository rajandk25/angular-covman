import { NgModule } from '@angular/core';
import { TeachersComponent } from './teachers.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { CheckInModule } from './../check-in/check-in.module';
import { TeachersRoutingModule } from './teachers.routing';


@NgModule({
  declarations: [TeachersComponent],
  imports: [
  AppCommonModule,
    CheckInModule,
    TeachersRoutingModule
  ]
})
export class TeachersModule { }
