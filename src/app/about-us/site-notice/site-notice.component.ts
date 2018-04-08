import {
  Component,
  OnInit
} from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'office-site-notice',
  templateUrl: './site-notice.component.html',
  styleUrls: ['./site-notice.component.scss']
})
export class SiteNoticeComponent implements OnInit {

  private _noticeArr: Notice[] = [];

  private _page: Page = new Page(1, 1);

  constructor() {}

  ngOnInit() {
    this.selectPage(1);
  }

  selectPage(page: number) {
    $.ajax({
      url: '../../../assets/server/notice.json',
      type: 'GET',
      data: {
        page: page
      },
      dataType: 'json',
      success: data => {
        this.page.count = data.count;
        this.page.current = page;
        this._noticeArr = data.content;
      },
      error: err => {}
    });
  }


  get notices(): Notice[] {
    return this._noticeArr;
  }

  set page(page: Page) {
    this._page = page;
  }

  get page(): Page {
    return this._page;
  }
}

interface NoticeInterface {
  readonly image: string;
  readonly title: string;
  readonly date: string;
  readonly description: string;
  readonly link: string;
}

class Notice implements NoticeInterface {
  private _image: string;
  private _title: string;
  private _date: string;
  private _description: string;
  private _link: string;

  constructor(notice: NoticeInterface) {
    this.image = notice.image;
    this.title = notice.title;
    this.date = notice.date;
    this.description = notice.description;
    this.link = notice.link;
  }

  set image(image: string) {
    this._image = image;
  }

  get image(): string {
    return this._image;
  }

  set title(title: string) {
    this._title = title;
  }

  get title(): string {
    return this._title;
  }

  set date(date: string) {
    this._date = date;
  }

  get date(): string {
    return this._date;
  }

  set description(description: string) {
    this._description = description;
  }

  get description(): string {
    return this._description;
  }

  set link(link: string) {
    this._link = link;
  }

  get link(): string {
    return this._link;
  }
}

interface PageInterface {
  start: number | boolean;
  previous: number | boolean;
  current: number | boolean;
  next: number | boolean;
  end: number | boolean;
}

type PageParamsType = number | boolean;

class Page implements PageInterface {

  private _start: PageParamsType;
  private _previous: PageParamsType;
  private _current: PageParamsType;
  private _next: PageParamsType;
  private _end: PageParamsType;
  private _count: number;

  constructor(current: number, count: number) {
    this._count = count;
    this._current = current;
    this._setParams();
  }

  private _setParams() {
    this._start = this._count == 1 || < number > this._current == 1 ? false : 1;
    this._previous = < number > this._current - 1 < 1 ? false : ( < number > this._current) - 1;
    this._current = this._count == 1 ? false : this._current;
    this._next = < number > this._current + 1 > this._count ? false : ( < number > this._current) + 1;
    this._end = this._count == 1 || < number > this._current == this._count ? false : this._count;
  }

  get start(): PageParamsType {
    return this._start;
  }

  get previous(): PageParamsType {
    return this._previous;
  }

  get current(): PageParamsType {
    return this._current;
  }

  get next(): PageParamsType {
    return this._next;
  }

  get end(): PageParamsType {
    return this._end;
  }

  set count(count: number) {
    this._count = count;
  }

  set current(current: PageParamsType) {
    this._current = current;
    this._setParams();
  }

}
