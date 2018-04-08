import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AboutUsComponent } from './about-us.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';

import { AboutUsService } from './service/about-us.service';

import { aboutUsRoutes } from './about-us.routes';

@NgModule({
  declarations: [
    AboutUsComponent,
    NavComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(aboutUsRoutes)
  ],
  providers: [
    AboutUsService
  ],
})
export class AboutUsModule { }
