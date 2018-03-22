import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductServerComponent } from './product-server.component';
import { BannerComponent } from './banner/banner.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ServerNavComponent } from './introduction/server-nav/server-nav.component';

import { productServerRoutes } from './product-server.routes';

@NgModule({
  declarations: [
    ProductServerComponent,
    BannerComponent,
    IntroductionComponent,
    ServerNavComponent
  ],
  imports: [
    RouterModule.forChild(productServerRoutes)
  ]
})
export class ProductServerModule { }
