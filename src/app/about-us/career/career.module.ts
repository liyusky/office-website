import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CareerComponent } from './career.component';

import { CareerRoutes } from './career.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CareerRoutes)
  ],
  declarations: [CareerComponent]
})
export class CareerModule {}
