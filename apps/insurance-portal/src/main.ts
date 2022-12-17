import { bootstrapApplication } from '@angular/platform-browser';
import {
  PreloadAllModules,
  provideRouter,
  withEnabledBlockingInitialNavigation,
  withPreloading,
} from '@angular/router';
import { AppComponent } from './app/app.component';
import { appRoutes } from './app/app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(
      appRoutes,
      withPreloading(PreloadAllModules),
      withEnabledBlockingInitialNavigation()
    ),
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(HttpClientModule),
  ],
}).catch((err) => console.error(err));
