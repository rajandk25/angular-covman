
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MessageService } from 'primeng/api';
import { AppComponent } from 'src/app/app.component';
import { AppRoutingModule } from 'src/app/app.routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppCommonModule } from 'src/app/app.common.module';
import { LayoutComponent } from 'src/app/layout/layout.component';
import { AuthGuard } from 'src/app/common/gaurds/auth.gaurd';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent
  ],
  imports: [
  BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    AppCommonModule
  ],
  exports: [],
  providers: [
    MessageService,
    AuthGuard
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
