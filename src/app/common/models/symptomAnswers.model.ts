
import { Student } from './student.model';
import { Modification } from './modification.model';
import { SymptomAnswer } from 'src/app/common/models/symptomAnswer.model';

export class SymptomAnswers {

     id: number;
     symptomAnswer: SymptomAnswer [];
     student: Student[];
     checker: string ;
     modification: Modification;

}