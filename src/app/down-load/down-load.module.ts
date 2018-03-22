import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { DownLoadComponent } from './down-load.component';
import { CertificationComponent } from './certification/certification.component';
import { LoadComponent } from './load/load.component';
import { TraitComponent } from './trait/trait.component';

import { downLoadRoutes } from './down-load.routes';

@NgModule({
  declarations: [
    DownLoadComponent,
    CertificationComponent,
    LoadComponent,
    TraitComponent
  ],
  imports: [
    RouterModule.forChild(downLoadRoutes)
  ]
})
export class DownLoadModule { }
