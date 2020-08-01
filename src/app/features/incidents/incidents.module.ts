import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IncidentsComponent } from './incidents.component';
import { IncidentRoutingModule } from './incident.routing';
import { AppCommonModule } from 'src/app/app.common.module';
import {DataViewModule} from 'primeng/dataview';
import {DialogModule} from 'primeng/dialog';

@NgModule({
  declarations: [IncidentsComponent],
  imports: [
    CommonModule,
    AppCommonModule,
    IncidentRoutingModule,
    DataViewModule,
    DialogModule
  ]
})
export class IncidentsModule { }
