import {Component, Input} from '@angular/core';
import {Movie} from "../../types/movie.interface";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

  @Input()
  selectedMovie: Movie;

  imagePath = environment.imagePath;

  showMovieDetails(movie: any) {
    this.selectedMovie = movie;
  }

}
