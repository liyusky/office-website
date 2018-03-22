import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

interface ConsultationContent {
  question: string;
  answer: string;
}

interface Consultation {
  version: number;
  content: ConsultationContent[];
  goal?: number;
}

interface JieTiaoDaShi {
  consultation?: Consultation;
}

@Component({
  selector: 'office-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.scss']
})
export class ConsultationComponent implements OnInit {

  public hasMore: boolean = true;
  public hasLocalStorage: boolean;
  public content: ConsultationContent[];
  private consultation: Consultation | Object = {};
  private JieTiaoDaShi: JieTiaoDaShi | Object = {};
  private hasStorage: boolean;

  public item = {
    answer: []
  }

  constructor() {}

  ngOnInit() {
    // this.initParams();
  }

  private initParams(): void {
    this.hasLocalStorage = typeof (window.localStorage) !== "undefined";
    if (this.hasLocalStorage) {
      let JieTiaoDaShi = window.localStorage.JieTiaoDaShi;
      if (JieTiaoDaShi) this.JieTiaoDaShi = JSON.parse(JieTiaoDaShi);
      if (( < JieTiaoDaShi > this.JieTiaoDaShi).consultation)
        this.consultation = ( < JieTiaoDaShi > this.JieTiaoDaShi).consultation;
      this.content = ( < Consultation > this.consultation).content.slice(0, 2);
    }
  }

  /**
   * name
   */
  public readMore(): void {
    let consultationPromise = new Promise(this.getConsultation);
    consultationPromise.then();
  }

  private getConsultation(resolve, reject): void {
    $.ajax({
      type: 'POST',
      url: '/projects',
      dataType: 'json',
      data: {

      },
      success: function (data: Object) {
        resolve(data);
      },
      error: function (XMLHttpRequest: Object, textStatus: string | number, errorThrown: string) {
        reject(XMLHttpRequest);
      }
    })
  }

  private setConsultationContent(value: Consultation): void {
    if ((<Consultation>this.consultation).version && value.version > ( < Consultation > this.consultation).version) {
      this.content = value.content.slice(0, (<Consultation>this.consultation).goal + 3);
    }
  }

}
