import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { CommonProblemComponent } from './common-problem.component';

import { CommonProblemRoutes } from './common-problem.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(CommonProblemRoutes)
  ],
  declarations: [
    CommonProblemComponent
  ]
})
export class CommonProblemModule { }
