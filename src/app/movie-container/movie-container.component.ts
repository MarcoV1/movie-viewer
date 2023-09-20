import {Component, OnInit} from '@angular/core';
import {getListOfMovies} from "../state/movie.actions";
import {Store} from "@ngrx/store";
import {selectCurrentPage, selectMoviesList, selectTotalPages} from "../state/movie.selectors";
import {Movie} from "../types/movie.interface";

@Component({
  selector: 'app-movie-container',
  templateUrl: './movie-container.component.html',
  styleUrls: ['./movie-container.component.scss']
})
export class MovieContainerComponent implements OnInit {
  movieList$ = this.store.select(selectMoviesList);
  currentPage$ = this.store.select(selectCurrentPage);
  totalPages$ = this.store.select(selectTotalPages);

  selectedMovie: Movie;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(getListOfMovies({ currentPage: 1 }));
  }
}
