import { Route } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { createRoutes } from './routing/routing-factory';

export const appRoutes: Route[] = [
  {
    path: '',
    component: NxWelcomeComponent,
  },
  ...createRoutes(),
];
