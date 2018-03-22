import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SiteNoticeComponent } from './site-notice.component';

import { siteNoticeRoutes } from './site-notice.routes';


@NgModule({
  imports: [
    RouterModule.forChild(siteNoticeRoutes)
  ],
  declarations: [
    SiteNoticeComponent
  ]
})
export class SiteNoticeModule { }
