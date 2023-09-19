import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MovieContainerRoutingModule } from './movie-container-routing.module';
import { MovieContainerComponent } from './movie-container.component';
import {MovieListComponent} from "../components/movie-list/movie-list.component";
import {MovieDetailsComponent} from "../components/movie-details/movie-details.component";
import { HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    MovieContainerComponent,
    MovieListComponent,
    MovieDetailsComponent
  ],
  imports: [
    CommonModule,
    MovieContainerRoutingModule,
    HttpClientModule
  ]
})
export class MovieContainerModule { }
