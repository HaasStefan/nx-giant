import { Route, Routes } from '@angular/router';
import { routingConfigs } from './routing-config';

export function createRoutes(): Routes {
  return routingConfigs.map(
    (config) =>
      ({
        path: config.domain,
        children: [...config.routes],
      } as Route)
  );
}
