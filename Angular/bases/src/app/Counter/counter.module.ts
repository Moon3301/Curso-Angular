import { NgModule } from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "../app-routing.module";

import { CounterComponent } from "./components/counter/counter.component";

@NgModule({

  declarations: [
    // Componentes
    CounterComponent
  ],

  imports: [
    // Modulos
    BrowserModule,
    AppRoutingModule

  ],
  exports: [
    // Componentes
    CounterComponent
  ],

  providers: [
    // Servicios
  ],
  bootstrap: []

})
export class CounterModule {}
