import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Student } from './../../common/models/student.model';
import { SymptomService } from './../../common/services/symptom-data.service';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { SymptomAnswer } from 'src/app/common/models/symptomAnswer.model';
import { SymptomAnswers } from './../../common/models/symptomAnswers.model';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.component.html',
  styleUrls: ['./check-in.component.css']
})
export class CheckInComponent implements OnInit {
  studentCheckInForm: FormGroup;

  @Input()
  student: Student;
  
  @Input()
  checker: string;

  symptoms: SymptomAnswer[] = [];

  @Output()
  checkInResult = new EventEmitter<boolean>();

  constructor(private symptomService: SymptomService, private fb: FormBuilder) {
    this.studentCheckInForm = this.fb.group({
      temperature: new FormControl('')
    });
   }

  ngOnInit(): void {
    if(this.symptoms.length == 0) {
      this.symptomService.getQuestions().subscribe(questions => {
        // create a symptom answer for each question and add corressponding control
        if(questions) {

          let count = 0;
          for(let question of questions) {
            let symtomAnswer: SymptomAnswer = new SymptomAnswer();
            symtomAnswer.id = null;
            symtomAnswer.symptomQuestion = question;
            symtomAnswer.yesOrNo = true;
            this.symptoms.push(symtomAnswer);

            this.studentCheckInForm.addControl('check'+count++, new FormControl([]));
          }
        }
      });
    }
  }

  handleCheckInStudent() {
    let checkIn: SymptomAnswers = new SymptomAnswers();
    checkIn.checker = this.checker;
    checkIn.symptomAnswer = [];
    checkIn.student = this.student;

    Object.keys(this.studentCheckInForm.controls).forEach(key => {
      let inputValue: any = this.studentCheckInForm.controls[key].value;

      if(key == 'temperature') {
          let ans: SymptomAnswer = new SymptomAnswer();
          ans.yesOrNo = true;
          ans.comments = inputValue;
          checkIn.symptomAnswer.push(ans);
      } else if(inputValue.length > 0) {
          let ans: SymptomAnswer = inputValue[0];
          ans.yesOrNo = true;
          checkIn.symptomAnswer.push(ans);
      }
    });

    console.log("Number of symptoms: " + checkIn.symptomAnswer.length);
    if(checkIn.symptomAnswer.length > 0) {
      this.symptomService.doDailyCheckIn(checkIn).subscribe(symptomAnswers => {
        if(symptomAnswers) {
          this.student.symptomAnswers =  symptomAnswers;
          this.checkInResult.emit(true);
        }
      });
    }
  }

  handleDisable(checked: any, description: string) {
    if(checked && description == 'No Symptoms') {
      for(let sym of this.symptoms) {
        if(sym.symptomQuestion.description !== 'No Symptoms') {
          sym.disabled = checked;
        }
      }
    }else {
      this.studentCheckInForm.enable();
    }
  }

}
