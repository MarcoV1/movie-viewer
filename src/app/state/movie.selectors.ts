import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MovieState} from "./movie.state";

export const selectMovies = createFeatureSelector<MovieState>("movies");

export const selectMoviesList = createSelector(
  selectMovies,
  (state: MovieState) => state?.movieList || []
);

export const selectMovieById = (movieId: number) => createSelector(
  selectMovies,
  (state: MovieState) =>
    state?.movieList.find(movie => movie.id == movieId)
);
