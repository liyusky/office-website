import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ContactUsComponent } from './contact-us.component';

import { ContactUsRoutes } from './contact-us.routes';

@NgModule({
  imports: [
    RouterModule.forChild(ContactUsRoutes)
  ],
  declarations: [
    ContactUsComponent
  ]
})
export class ContactUsModule { }
