import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { BannerComponent } from './banner/banner.component';
import { CharacteristicComponent } from './characteristic/characteristic.component';
import { ConsultationComponent } from './consultation/consultation.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { RankComponent } from './rank/rank.component';

import { homeRoutes } from './home.routes';
import { ContractComponent } from './contract/contract.component';
import { SocialComponent } from './social/social.component';

@NgModule({
  declarations: [
    HomeComponent,
    BannerComponent,
    CharacteristicComponent,
    ConsultationComponent,
    IntroductionComponent,
    RankComponent,
    ContractComponent,
    SocialComponent
  ],
  imports: [
    RouterModule.forChild(homeRoutes)
  ]
})
export class HomeModule { }
