import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonProblemComponent } from './common-problem.component';

import { commonProblemRoutes } from './common-problem.routes';

@NgModule({
  imports: [
    RouterModule.forChild(commonProblemRoutes)
  ],
  declarations: [
    CommonProblemComponent
  ]
})
export class CommonProblemModule { }
