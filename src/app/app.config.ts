import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
// import 'hammerjs'; // for swyping

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
