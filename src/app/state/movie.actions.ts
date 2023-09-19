import {createAction, props} from "@ngrx/store";
import {Movie} from "../types/movie.interface";

export const getListOfMovies = createAction(
  "[Movie List] Get Movies");

export const getListOfMoviesSuccess = createAction(
  "[Movie List] Get Movies Success",
  props<{ movieList: Movie[] }>()
);

export const getListOfMoviesFailed = createAction(
  "[Wine List] Get Movies Failed",
  props<{ error: any }>()
);




