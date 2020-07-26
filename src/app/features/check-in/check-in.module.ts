import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckInComponent } from './check-in.component';
import { AppCommonModule } from 'src/app/app.common.module';


@NgModule({
  declarations: [CheckInComponent],
  imports: [
    CommonModule,
    AppCommonModule
  ],
  exports: [CheckInComponent]
})
export class CheckInModule { }
