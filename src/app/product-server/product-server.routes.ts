import { ProductServerComponent } from './product-server.component';

export const productServerRoutes = [
  {
    path: '**',
    component: ProductServerComponent
  },
  {
    path: '',
    component: ProductServerComponent
  },
]