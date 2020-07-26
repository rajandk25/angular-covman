import { NgModule } from '@angular/core';
import { NgPrimeModule } from 'src/app/app.ngprime.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
    imports: [
    ],
    exports: [
        NgPrimeModule,
        FormsModule,
        ReactiveFormsModule,
        DropdownModule,
        CheckboxModule
    ],
    declarations: [
    ]
})
export class AppCommonModule {

}