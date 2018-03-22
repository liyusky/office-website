export const appRoutes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule'
  },
  {
    path: 'down-load',
    loadChildren: './down-load/down-load.module#DownLoadModule'
  },
  {
    path: 'product-server',
    loadChildren: './product-server/product-server.module#ProductServerModule'
  },
  // {
  //   path: 'about-us',
  //   loadChildren: './about-us/about-us.module#AboutUsModule'
  // },
  {
    path: '**',
    loadChildren: './home/home.module#HomeModule'
  }
]
