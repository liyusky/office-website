import { ProductServerComponent } from './product-server.component';

export const productServerRoutes = [
  {
    path: '',
    redirectTo: 'ious',
    pathMatch: 'full'
  },
  {
    path: 'ious',
    component: ProductServerComponent
  },
]