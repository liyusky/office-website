import { AboutUsComponent } from './about-us.component';

export const aboutUsRoutes = [
  {
    path: '',
    component: AboutUsComponent,
    children: [
      {
        path: '',
        redirectTo: 'company-profile',
        pathMatch: 'full'
      },
      {
        path: 'company-profile',
        loadChildren: './company-profile/company-profile.module#CompanyProfileModule'
      },
      {
        path: 'common-problem',
        loadChildren: './common-problem/common-problem.module#CommonProblemModule'
      },
      {
        path: 'site-notice',
        loadChildren: './site-notice/site-notice.module#SiteNoticeModule'
      },
      {
        path: 'contact-us',
        loadChildren: './contact-us/contact-us.module#ContactUsModule'
      },
      {
        path: 'career',
        loadChildren: './career/career.module#CareerModule'
      },
      {
        path: '**',
        loadChildren: './company-profile/company-profile.module#CompanyProfileModule'
      }
    ]
  }
];