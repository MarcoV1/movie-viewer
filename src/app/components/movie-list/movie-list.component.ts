import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Movie} from "../../types/movie.interface";
import {getListOfMovies} from "../../state/movie.actions";
import {Store} from "@ngrx/store";

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  @Input() movieList: Movie[];
  @Input() currentPage: number;
  @Input() totalPages: number;

  @Output() clickedMovie = new EventEmitter<Movie>();

  clickedMovieId: number;

  constructor(private store: Store) {}

  onMovieClick(movie: any) {
    this.clickedMovieId = movie?.id;
    this.clickedMovie.next(movie);
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.store.dispatch(getListOfMovies({ currentPage: this.currentPage - 1 }));
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.store.dispatch(getListOfMovies({ currentPage: this.currentPage + 1 }));
    }
  }

}
