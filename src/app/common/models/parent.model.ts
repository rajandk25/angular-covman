
import { User } from './user.model';
import { Student } from './student.model';
import { Modification } from './modification.model';

export class Parent {
    id: number;
    user: User;
    students: Student[];
    modification: Modification;

    constructor() {
        this.id = null;
        this.user = null;
        this.modification = null;
        this.students = [];
    }
}
