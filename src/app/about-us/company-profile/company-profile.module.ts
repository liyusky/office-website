import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CompanyProfileComponent } from './company-profile.component';

import { companyProfileRoutes } from './company-profile.routes';

@NgModule({
  declarations: [
    CompanyProfileComponent
  ],
  imports: [
    RouterModule.forChild(companyProfileRoutes)
  ]
})
export class CompanyProfileModule { }
