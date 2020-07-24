import { NgModule } from '@angular/core';
import { NgPrimeModule } from 'src/app/app.ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
    ],
    exports: [
        NgPrimeModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
    ]
})
export class AppCommonModule {

}