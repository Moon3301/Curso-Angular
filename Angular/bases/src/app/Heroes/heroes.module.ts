import { NgModule } from "@angular/core";

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from "../app-routing.module";

import { HeroComponent } from "./components/Hero/hero.component";
import { ListComponent } from "./components/List/list.component";

@NgModule({

  declarations: [
    // Componentes
    HeroComponent,
    ListComponent
  ],

  imports: [
    // Modulos
    BrowserModule,
    AppRoutingModule

  ],
  exports: [
    // Componentes
    HeroComponent,
    ListComponent
  ],

  providers: [
    // Servicios
  ],
  bootstrap: []

})
export class HeroesModule {}
