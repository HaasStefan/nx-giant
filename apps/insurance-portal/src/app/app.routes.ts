import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { createRoutes } from './routing/routing-factory';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  ...createRoutes(),
];
