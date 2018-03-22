import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AboutUsComponent } from './about-us.component';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { NavComponent } from './nav/nav.component';

import { aboutUsRoutes } from './about-us.routes';

@NgModule({
  declarations: [
    AboutUsComponent,
    DetailHeaderComponent,
    NavComponent,
  ],
  imports: [
    RouterModule.forChild(aboutUsRoutes)
  ]
})
export class AboutUsModule { }
