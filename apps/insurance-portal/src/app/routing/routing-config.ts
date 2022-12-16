import { Route } from '@angular/router';

export interface RoutingConfig {
  domain: string;
  routes: (Route & { icon: 'plus' | 'list' })[];
}

export const routingConfigs: RoutingConfig[] = [
  {
    domain: 'customer',
    routes: [
      {
        path: 'create',
        icon: 'plus',
        loadComponent: async () =>
          (await import('@nx-giant/customer/feature-create'))
            .CustomerFeatureCreateComponent,
      },
      {
        path: 'list',
        icon: 'list',
        loadComponent: async () =>
          (await import('@nx-giant/customer/feature-list'))
            .CustomerFeatureListComponent,
      },
    ],
  },
  {
    domain: 'claim',
    routes: [
      {
        path: 'create',
        icon: 'plus',
        loadComponent: async () =>
          (await import('@nx-giant/claim/feature-create'))
            .ClaimFeatureCreateComponent,
      },
      {
        path: 'list',
        icon: 'list',
        loadComponent: async () =>
          (await import('@nx-giant/claim/feature-list'))
            .ClaimFeatureListComponent,
      },
    ],
  },
  {
    domain: 'complaint',
    routes: [
      {
        path: 'create',
        icon: 'plus',
        loadComponent: async () =>
          (await import('@nx-giant/complaint/feature-create'))
            .ComplaintFeatureCreateComponent,
      },
      {
        path: 'list',
        icon: 'list',
        loadComponent: async () =>
          (await import('@nx-giant/complaint/feature-list'))
            .ComplaintFeatureListComponent,
      },
    ],
  },
];