import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { IousComponent } from './ious.component';

import { iousRoutes } from './ious.routes';


@NgModule({
  declarations: [
    IousComponent
  ],
  imports: [
    RouterModule.forChild(iousRoutes)
  ]
})
export class IousModule { }
