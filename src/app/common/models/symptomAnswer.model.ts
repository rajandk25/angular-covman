
import { SymptomQuestion } from "./symptomQuestion.model";


export class SymptomAnswer {

    id: number;
    symptomQuestion: SymptomQuestion;
    yesOrNo: boolean;
    comments: String;
    disabled: boolean = false;
}