import {Movie} from "../types/movie.interface";

export interface MovieState {
  movieList: Movie[];
  page: number;
  totalPages: number;
}

export const initialState: MovieState = {
  movieList: [],
  page: 1,
  totalPages: 1
};
