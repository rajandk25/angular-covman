import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './profile.component';
import { AppCommonModule } from 'src/app/app.common.module';
import { DataViewModule } from 'primeng/dataview';
import { ProfileRoutingModule } from './profile.routing';



@NgModule({
  declarations: [ProfileComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    ProfileRoutingModule,
    DataViewModule
    
  ]
})
export class ProfileModule { }
