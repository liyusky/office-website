import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SiteNoticeDetailComponent } from './site-notice-detail.component';

import { SiteNoticeDetailRoutes } from './site-notice-detail.routes';

@NgModule({
  imports: [
    RouterModule.forChild(SiteNoticeDetailRoutes)
  ],
  declarations: [SiteNoticeDetailComponent]
})
export class SiteNoticeDetailModule { }
