import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CommonProblemComponent } from './common-problem.component';

import { CommonProblemRoutes } from './common-problem.routes';

@NgModule({
  imports: [
    RouterModule.forChild(CommonProblemRoutes)
  ],
  declarations: [
    CommonProblemComponent
  ]
})
export class CommonProblemModule { }
