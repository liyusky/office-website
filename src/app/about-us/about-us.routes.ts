import { AboutUsComponent } from './about-us.component';

export const aboutUsRoutes = [
  {
    path: '',
    component: AboutUsComponent,
    // children: [
    //   {
    //     path: 'company-profile',
    //     loadChildren: './company-profile/company-profile#CompanyProfileModule'
    //   },
    //   {
    //     path: 'common-problem',
    //     loadChildren: './common-problem/common-problem#CommonProblemModule'
    //   },
    //   {
    //     path: 'site-notice',
    //     loadChildren: './site-notice/site-notice#SiteNoticeModule'
    //   },
    // ]
  }
];