import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ApiKeyInterceptor} from "./interceptors/api-key.interceptor";
import {moviesReducer} from "./state/movie.reducer";
import {MovieEffects} from "./state/movie.effects";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ movies: moviesReducer }, {}),
    EffectsModule.forRoot([MovieEffects]),
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiKeyInterceptor,
      multi: true,
    },
  ],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
