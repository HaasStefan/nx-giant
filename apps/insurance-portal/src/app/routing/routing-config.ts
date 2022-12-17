import { Route } from '@angular/router';
import { CanDeactivateGuard } from '@nx-giant/shared/util';

export interface RoutingConfig {
  domain: string;
  routes: (Route & {
    icon?: 'plus' | 'list';
    label?: string;
    hide?: boolean;
  })[];
}

export const routingConfigs: RoutingConfig[] = [
  {
    domain: 'contract',
    routes: [
      {
        path: 'details/:id',
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
        path: 'details/:id',
        hide: true,
        loadComponent: async () =>
          (await import('@nx-giant/customer/feature-details'))
            .CustomerFeatureDetailsComponent,
      },
      {
        path: 'create',
        icon: 'plus',
        label: 'Create new customer',
        canDeactivate: [CanDeactivateGuard],
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
        path: 'details/:id',
        hide: true,
        loadComponent: async () =>
          (await import('@nx-giant/claim/feature-details'))
            .ClaimFeatureDetailsComponent,
      },
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
  {
    domain: 'notification',
    routes: [
      {
        path: 'list',
        icon: 'list',
        label: 'List',
        loadComponent: async () =>
          (await import('@nx-giant/notification/feature-list'))
            .NotificationFeatureListComponent,
      },
    ],
  },
];
