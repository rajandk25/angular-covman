import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCommonModule } from 'src/app/app.common.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin.routing';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';

@NgModule({
  imports: [
  CommonModule,
    AdminRoutingModule,
    AppCommonModule,
    DataViewModule,
    DropdownModule,
    DialogModule
  ],
  declarations: [
    AdminComponent
  ]
})
export class AdminModule { }
