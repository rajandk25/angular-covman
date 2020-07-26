
import { Parent } from './parent.model';
import { SymptomAnswers } from './symptomAnswers.model';
import { Employee } from './employee.model';
import { School } from './school.model';
import { Modification } from './modification.model';


export class Student {
    id: number;
    firstName: string;
    lastName: string;
    grade: number;
    age: number;
    parent: Parent;
    employee: Employee[];
    symptomAnswers: SymptomAnswers;
    school: School;
    modification: Modification;
    isAdmittable = true;
}