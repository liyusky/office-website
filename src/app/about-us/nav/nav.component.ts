import { Component, OnInit } from '@angular/core';

import { AboutUsService } from '../service/about-us.service';

@Component({
  selector: 'office-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

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

}
