import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Movie} from "../../types/movie.interface";

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent {

  @Input()
  movieList: Movie[];

  @Output()
  clickedMovie = new EventEmitter<Movie>();

  clickedMovieId: number;

  onMovieClick(movie: any) {
    console.log('Clicked on movie:', movie);
    this.clickedMovieId = movie?.id;
    this.clickedMovie.next(movie);
  }

}
