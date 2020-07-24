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
            { Id: 1, Name: 'User', Department: '.net', DepartmentId: 1, Address: 'Place1, State', Age: 26 },
            { Id: 2, Name: 'User1', Department: '.net', DepartmentId: 1, Address: 'Place2, State', Age: 25 },
            { Id: 3, Name: 'User2', Department: 'PHP', DepartmentId: 4, Address: 'Place1, State', Age: 25 },
            { Id: 4, Name: 'User3', Department: '.net', DepartmentId: 1, Address: 'Place1, State', Age: 30 },
            { Id: 5, Name: 'User4', Department: 'HR', DepartmentId: 2, Address: 'Place3, State', Age: 25 },
            { Id: 6, Name: 'User5', Department: 'HR', DepartmentId: 2, Address: 'Place1, State', Age: 28 },
            { Id: 7, Name: 'User6', Department: 'Admin', DepartmentId: 3, Address: 'Place1, State', Age: 26 },
            { Id: 8, Name: 'User7', Department: '.net', DepartmentId: 1, Address: 'Place2, State', Age: 25 },
            { Id: 9, Name: 'User8', Department: '.net', DepartmentId: 1, Address: 'Place1, State', Age: 27 },
            { Id: 10, Name: 'User9', Department: 'Admin', DepartmentId: 3, Address: 'Place3, State', Age: 25 },
            { Id: 11, Name: 'User10', Department: '.net', DepartmentId: 1, Address: 'Place1, State', Age: 35 },
            { Id: 12, Name: 'User', Department: '.net', DepartmentId: 1, Address: 'Place1, State', Age: 26 },
            { Id: 13, Name: 'User1', Department: '.net', DepartmentId: 1, Address: 'Place2, State', Age: 25 },
            { Id: 14, Name: 'User2', Department: 'PHP', DepartmentId: 4, Address: 'Place1, State', Age: 25 },
            { Id: 15, Name: 'User3', Department: '.net', DepartmentId: 1, Address: 'Place1, State', Age: 30 },
            { Id: 16, Name: 'User4', Department: 'HR', DepartmentId: 2, Address: 'Place3, State', Age: 25 },
            { Id: 17, Name: 'User5', Department: 'HR', DepartmentId: 2, Address: 'Place1, State', Age: 28 },
            { Id: 18, Name: 'User6', Department: 'Admin', DepartmentId: 3, Address: 'Place1, State', Age: 26 },
            { Id: 19, Name: 'User7', Department: '.net', DepartmentId: 1, Address: 'Place2, State', Age: 25 },
            { Id: 20, Name: 'User8', Department: '.net', DepartmentId: 1, Address: 'Place1, State', Age: 27 },
            { Id: 21, Name: 'User9', Department: 'Admin', DepartmentId: 3, Address: 'Place3, State', Age: 25 },
            { Id: 22, Name: 'User10', Department: '.net', DepartmentId: 1, Address: 'Place1, State', Age: 35 },
            { Id: 23, Name: 'User', Department: '.net', DepartmentId: 1, Address: 'Place1, State', Age: 26 },
            { Id: 24, Name: 'User1', Department: '.net', DepartmentId: 1, Address: 'Place2, State', Age: 25 },
            { Id: 25, Name: 'User2', Department: 'PHP', DepartmentId: 4, Address: 'Place1, State', Age: 25 },
            { Id: 26, Name: 'User3', Department: '.net', DepartmentId: 1, Address: 'Place1, State', Age: 30 },
            { Id: 27, Name: 'User4', Department: 'HR', DepartmentId: 2, Address: 'Place3, State', Age: 25 },
            { Id: 28, Name: 'User5', Department: 'HR', DepartmentId: 2, Address: 'Place1, State', Age: 28 },
            { Id: 29, Name: 'User6', Department: 'Admin', DepartmentId: 3, Address: 'Place1, State', Age: 26 },
            { Id: 30, Name: 'User7', Department: '.net', DepartmentId: 1, Address: 'Place2, State', Age: 25 }
        ];
    }
}
