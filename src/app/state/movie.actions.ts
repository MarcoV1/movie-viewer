import {createAction, props} from "@ngrx/store";
import {MovieResults} from "../types/movie-results.interface";

export const getListOfMovies = createAction(
  "[Movie List] Get Movies",
  props<{ currentPage: number }>());

export const getListOfMoviesSuccess = createAction(
  "[Movie List] Get Movies Success",
  props<{ movieResults: MovieResults }>()
);

export const getListOfMoviesFailed = createAction(
  "[Movie List] Get Movies Failed",
  props<{ error: any }>()
);




