
import { User } from 'src/app/common/models/user.model';
import { Student } from './student.model';
import { School } from './school.model';
import { Modification } from './modification.model';

export class Employee {

    id: number;
    students: Student[];
    user: User;
    school: School;
    modification: Modification;

      

}