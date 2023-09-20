import {Movie} from "./movie.interface";

export interface MovieResults {
  results: Movie[];
  total_pages: number;
  page: number;
}
