import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { ProductServerComponent } from './product-server.component';

import { BannerComponent } from './banner/banner.component';
import { IntroductionComponent } from './introduction/introduction.component';

import { productServerRoutes } from './product-server.routes';
import { FeedbackComponent } from './feedback/feedback.component';
import { FlowComponent } from './flow/flow.component';

@NgModule({
  declarations: [
    ProductServerComponent,
    BannerComponent,
    IntroductionComponent,
    FeedbackComponent,
    FlowComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(productServerRoutes)
  ]
})
export class ProductServerModule { }
