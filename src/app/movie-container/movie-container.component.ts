import {Component, OnInit} from '@angular/core';
import {MovieService} from "../services/movie.service";
import {take} from "rxjs";
import {getListOfMovies} from "../state/movie.actions";
import {Store} from "@ngrx/store";
import {selectMoviesList} from "../state/movie.selectors";
import {Movie} from "../types/movie.interface";

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})
export class MovieContainerComponent implements OnInit {

  movieList$ = this.store.select(selectMoviesList);

  selectedMovie: Movie;

  constructor(movieService: MovieService, private store: Store) {

    movieService.getAllMovies().pipe(take(1)).subscribe(value => console.log("val", value))
  }

  ngOnInit() {
    this.store.dispatch(getListOfMovies());
  }
}
