import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CareerComponent } from './career.component';

import { CareerRoutes } from './career.routes';

@NgModule({
  imports: [
    RouterModule.forChild(CareerRoutes)
  ],
  declarations: [CareerComponent]
})
export class CareerModule { }
