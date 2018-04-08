import { Component, OnInit } from '@angular/core';
import { AboutUsService } from '../service/about-us.service';

interface NavItem {
  flag: number;
  goal: string;
  title: string;
}

@Component({
  selector: 'office-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public navList: NavItem[] = [
    this.getNavItem(0, 'company-profile', '公司简介'),
    this.getNavItem(1, 'site-notice', '网站公告'),
    this.getNavItem(2, 'common-problem', '常见问题'),
    this.getNavItem(3, 'career', '招贤纳士'),
    this.getNavItem(4, 'contact-us', '联系我们'),
  ];



  constructor(private aboutUsService: AboutUsService) { }

  ngOnInit() {
  }

  /**
   * 
   * 
   * @memberof NavComponent
   */
  public selectContent(sign: number):void {
    this.aboutUsService.headerContent.next(sign);
  }

  getNavItem(flag: number, goal: string, title: string): NavItem {
    return {
      title: title,
      goal: goal,
      flag: flag
    }
  }

}
