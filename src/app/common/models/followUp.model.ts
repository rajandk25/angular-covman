
import { Student } from './student.model';
import { Parent } from './parent.model';
import { Employee } from 'src/app/common/models/employee.model';
import { Modification } from './modification.model';

export class FollowUp{
    id: number;
    student: Student;
    parent: Parent;
    employee: Employee;
    message: string;
    followUpState: string;
    modification: Modification;
}