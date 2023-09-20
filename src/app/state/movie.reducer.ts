import {Action, createReducer, on} from "@ngrx/store";
import {initialState, MovieState} from "./movie.state";
import * as MovieActions from "./movie.actions";

export const moviesReducer = createReducer(
  initialState,
  on(MovieActions.getListOfMoviesSuccess, (state, { movieResults }) => ({
    ...state,
    movieList: movieResults?.results,
    page: movieResults?.page,
    totalPages: movieResults?.total_pages
  })),
);

export function reducer(state: MovieState | undefined, action: Action) {
  return moviesReducer(state, action);
}
