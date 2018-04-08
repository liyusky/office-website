import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SiteNoticeComponent } from './site-notice.component';

import { SiteNoticeRoutes } from './site-notice.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SiteNoticeRoutes)
  ],
  declarations: [
    SiteNoticeComponent
  ]
})
export class SiteNoticeModule { }
