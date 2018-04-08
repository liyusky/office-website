import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'office-common-problem',
  templateUrl: './common-problem.component.html',
  styleUrls: ['./common-problem.component.scss']
})
export class CommonProblemComponent implements OnInit {

  private _consultations: Consultation[] = [];

  constructor() { }

  ngOnInit() {
    this._getData();
  }

  toggleShowAnswers(flag) {
    this.consultations[flag].show = !this.consultations[flag].show;
  }

  private _getData() {
    $.ajax({
      url: '../../../assets/server/problem.json',
      type: 'GET',
      dataType: 'json',
      success: data => {
        data.content.forEach((element, i) => {
          this._consultations.push(new Consultation(element, i));
        });
      },
      error: function (err) {}
    });
  }

  get consultations(): Consultation[] {
    return this._consultations;
  }
  
}

interface AnswerInterface {
  title?: string | boolean;
  content: string;
}

interface ConsultationInterface {
  question: string;
  answers?: AnswerInterface[];
}


class Consultation implements ConsultationInterface {
  private _show: boolean;
  private _flag: number;
  private _question: string;
  private _answers: AnswerInterface[] = [];

  constructor(private consultation: ConsultationInterface, flag: number, show: boolean = false) {
    this.question = consultation.question;
    this.answers = consultation.answers;
    this.flag = flag;
    this.show = show;
  }
  
  set show(value: boolean) {
    this._show = value;
  }
  
  get show(): boolean {
    return this._show;
  }

  set flag(value: number) {
    this._flag = value;
  }

  get flag(): number {
    return this._flag;
  }

  set question(value: string) {
    this._question = value;
  }

  get question(): string {
    return this._question;
  }

  set answers(value: AnswerInterface[]) {
    this._answers = value;
  }

  get answers(): AnswerInterface[] {
    return this._answers;
  }
}


