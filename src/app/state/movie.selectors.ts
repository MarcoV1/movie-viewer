import {createFeatureSelector, createSelector} from "@ngrx/store";
import {MovieState} from "./movie.state";

export const selectMovies = createFeatureSelector<MovieState>("movies");

export const selectMoviesList = createSelector(
  selectMovies,
  (state: MovieState) => state?.movieList || []
);

export const selectCurrentPage = createSelector(
  selectMovies,
  (state: MovieState) => state?.page
);

export const selectTotalPages = createSelector(
  selectMovies,
  (state: MovieState) => state?.totalPages
);

