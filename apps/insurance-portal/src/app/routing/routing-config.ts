import { Route } from '@angular/router';

export interface RoutingConfig {
  domain: string;
  routes: (Route &
    ({ icon?: 'plus' | 'list'; label?: string, hide?: boolean }))[];
}

export const routingConfigs: RoutingConfig[] = [
  {
    domain: 'contract',
    routes: [
      {
        path: ':id',
        hide: true,
        loadComponent: async () =>
          (await import('@nx-giant/contract/feature-details'))
            .ContractFeatureDetailsComponent,
      },
      {
        path: 'list',
        icon: 'list',
        label: 'List',
        loadComponent: async () =>
          (await import('@nx-giant/contract/feature-list'))
            .ContractFeatureListComponent,
      },
    ],
  },
  {
    domain: 'customer',
    routes: [
      {
        path: 'create',
        icon: 'plus',
        label: 'Create new customer',
        loadComponent: async () =>
          (await import('@nx-giant/customer/feature-create'))
            .CustomerFeatureCreateComponent,
      },
      {
        path: 'list',
        icon: 'list',
        label: 'List',
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
        label: 'Create new claim',
        loadComponent: async () =>
          (await import('@nx-giant/claim/feature-create'))
            .ClaimFeatureCreateComponent,
      },
      {
        path: 'list',
        icon: 'list',
        label: 'List',
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
        label: 'Create new complaint',
        loadComponent: async () =>
          (await import('@nx-giant/complaint/feature-create'))
            .ComplaintFeatureCreateComponent,
      },
      {
        path: 'list',
        icon: 'list',
        label: 'List',
        loadComponent: async () =>
          (await import('@nx-giant/complaint/feature-list'))
            .ComplaintFeatureListComponent,
      },
    ],
  },
];
