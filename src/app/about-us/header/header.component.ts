import { Component, OnInit } from '@angular/core';

import { AboutUsService } from '../service/about-us.service';


interface HeaderContent {
  title: string;
  message: string;
  bgImage: string;
}


@Component({
  selector: 'office-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private _title: string;
  private _message: string;
  private _bgImage: string;

  private _headerContent: HeaderContent[] = [
    this.getContent('company-profile', '公司简介', '始终坚持以理念创新、模式创新和技术创新服务大众，真正的让金融更美好。'),
    this.getContent('site-notice', '网站公告', '每天更新你关注的头条，与金融网贷世界接轨。'),
    this.getContent('common-problem', '常见问题', '精细解答，只为向您提供最优质的项目与服务。'),
    this.getContent('career', '招贤纳士', '您的加入将会为我们带来更多的精彩，期待您的加入。'),
    this.getContent('contact-us', '联系我们', '诚实和勤勉应该成为你永久的伴侣！'),
  ];

  constructor(private aboutUsService: AboutUsService) {
    this.title = this._headerContent[0].title;
    this.message = this._headerContent[0].message;
    this.bgImage = this._headerContent[0].bgImage;
  }

  ngOnInit() {
    this.aboutUsService.headerContent.subscribe(value => {
      this.title = this._headerContent[value].title;
      this.message = this._headerContent[value].message;
      this.bgImage = this._headerContent[value].bgImage;
    });
  }


  set message(value: string) {
    this._message = value;
  }

  get message() {
    return this._message;
  }

  set title(value: string) {
    this._title = value;
  }

  get title() {
    return this._title;
  }

  set bgImage(value: string) {
    this._bgImage = value;
  }

  get bgImage() {
    return this._bgImage;
  }

  getContent(bgImage: string,title: string, message: string): HeaderContent {
    return {
      title: title,
      message: message,
      bgImage: '../../../assets/images/about-us/' + bgImage + '-header.png',
    }
  }
}
