import {Movie} from "../types/movie.interface";

export interface MovieState {
  movieList: Movie[];
}

export const initialState: MovieState = {
  movieList: [],
};
