import {
  Component,
  OnInit
} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'office-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {
  private _jobsArr: Job[] = [];

  constructor() {}

  ngOnInit() {
    this._getData();
  }

  get jobs(): Job[] {
    return this._jobsArr;
  }

  toggleShowDetail(flag) {
    this.jobs[flag].show = !this.jobs[flag].show;
  }

  private _getData() {
    $.ajax({
      type: 'GET',
      url: '../../../assets/server/career.json',
      dataType: 'json',
      success: data => {
        data.content.forEach((element, i) => {
          this._jobsArr.push(new Job(element, i));
        });
      },
      error: function () {

      }
    })
  }

}

interface JobItemInterface {
  readonly name: string;
  readonly type: string;
  readonly city: string;
  readonly date: string;
  readonly contents: JobContentInterface[];
}

interface JobContentInterface {
  title: string;
  messages: string[];
}

class Job implements JobItemInterface {
  private _show: boolean;
  private _flag: number;
  private _name: string;
  private _type: string;
  private _city: string;
  private _date: string;
  private _contents: JobContentInterface[];


  constructor(job: JobItemInterface, flag: number, show: boolean = false) {
    this.flag = flag;
    this.show = show;
    this.name = job.name;
    this.type = job.type;
    this.city = job.city;
    this.date = job.date;
    this.contents = job.contents;
  }

  get show(): boolean {
    return this._show;
  }

  set show(show: boolean) {
    this._show = show;
  }

  get flag(): number {
    return this._flag;
  }

  set flag(flag: number) {
    this._flag = flag;
  }

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
  }

  get type(): string {
    return this._type;
  }

  set type(type: string) {
    this._type = type;
  }

  get city(): string {
    return this._city;
  }

  set city(city: string) {
    this._city = city;
  }

  get date(): string {
    return this._date;
  }

  set date(date: string) {
    this._date = date;
  }

  get contents(): JobContentInterface[] {
    return this._contents;
  }

  set contents(contents: JobContentInterface[]) {
    this._contents = contents;
  }

}
