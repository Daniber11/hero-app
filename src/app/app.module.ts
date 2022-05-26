import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponents } from './heros/heros.component';
import { HeroComponent } from './hero/hero.component';
import { InfoheroComponent } from './infohero/infohero.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponents,
    HeroComponent,
    InfoheroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
