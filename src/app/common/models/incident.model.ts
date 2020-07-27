
import { Student } from './student.model';
import { Employee } from 'src/app/common/models/employee.model';
import { SymptomAnswers } from './symptomAnswers.model';
import { Modification } from './modification.model';

export class ExposureIncident{
    id: number;
    student: Student;
    employee: Employee;
    symptomAnswers: SymptomAnswers;
    exposureState: string;
    comments: string;
    modification: Modification;
}