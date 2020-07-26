import { Injectable } from '@angular/core';
import { Employee } from 'src/app/common/models/employee.model';

@Injectable({
    providedIn: 'root',
})
/**
 * employee service
 */
export class EmployeeDataService {
    getEmployeeList(): Employee[] {
        return [
        ];
    }
}
