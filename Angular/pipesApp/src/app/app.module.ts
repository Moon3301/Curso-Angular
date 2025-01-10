import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';


import { ButtonModule } from 'primeng/button';
import { SharedModule } from 'primeng/api';
import { SharedModule as SharedModule_1 } from "./shared/shared.module";

// Configuracion del locale del la app
import localeEsHN from '@angular/common/locales/es-CL';

import localeFrCA from '@angular/common/locales/fr-CA';

import { registerLocaleData } from '@angular/common';

registerLocaleData( localeEsHN );

registerLocaleData( localeFrCA );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    SharedModule,
    SharedModule_1
],
  providers: [
    {
      provide: LOCALE_ID, useValue: 'es-CL'
    },
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: Aura,
        options: {
          prefix: 'p',
          darkModeSelector: 'system',
          cssLayer: false
        }
      }
    })
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
