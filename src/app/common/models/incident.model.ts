
import { Student } from './student.model';
import { Employee } from 'src/app/common/models/employee.model';
import { SymptomAnswers } from './symptomAnswers.model';
import { Modification } from './modification.model';

export class Incident{
    id: number;
    student: Student;
    employee: Employee;
    symptomAnswers: SymptomAnswers;
    incidentState: string;
    comments: string;
    modification: Modification;
}