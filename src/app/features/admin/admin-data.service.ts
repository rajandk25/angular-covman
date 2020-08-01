import { Injectable } from '@angular/core';
import { Employee } from 'src/app/common/models/employee.model';

@Injectable({
    providedIn: 'root',
})
export class AdminDataService {
    getEmployeeList(): Employee[] {
        return [
        ];
    }
}
