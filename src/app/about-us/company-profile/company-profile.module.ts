import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CompanyProfileComponent } from './company-profile.component';

import { CompanyProfileRoutes } from './company-profile.routes';

@NgModule({
  declarations: [
    CompanyProfileComponent
  ],
  imports: [
    RouterModule.forChild(CompanyProfileRoutes)
  ]
})
export class CompanyProfileModule { }
