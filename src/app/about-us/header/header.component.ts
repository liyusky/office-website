import { Component, OnInit } from '@angular/core';

import { AboutUsService } from '../service/about-us.service';

@Component({
  selector: 'office-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private aboutUsService: AboutUsService) { }

  ngOnInit() {
  }


}
