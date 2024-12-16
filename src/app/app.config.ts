import { VERSION as CDK_VERSION } from '@angular/cdk';
import { provideHttpClient } from '@angular/common/http';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import '@angular/localize/init';
import {
  MAT_DATE_LOCALE,
  VERSION as MAT_VERSION,
} from '@angular/material/core';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { routes } from './app.routes';
import { MaterialModule } from './shared/material.module';

console.info('Angular CDK version', CDK_VERSION.full);
console.info('Angular Material version', MAT_VERSION.full);

export const appConfig: ApplicationConfig = {
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimations(),
    provideHttpClient(),
    importProvidersFrom(FormsModule, ReactiveFormsModule, MaterialModule),
    provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(), provideAnimationsAsync(),
  ],
};
