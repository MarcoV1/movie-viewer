import {moviesReducer} from "./movie.reducer";
import {getListOfMoviesSuccess} from "./movie.actions";
import {MovieResults} from "../types/movie-results.interface";

describe('Movie Reducer', () => {
  it('should return initial state', () => {
    const initialState = {
      movieList: [],
      page: 1,
      totalPages: 1
    };
    const action = {} as any;
    const state = moviesReducer(initialState, action);
    expect(state).toBe(initialState);
  });

  it('should handle getListOfMoviesSuccess action', () => {
    const initialState = {
      movieList: [],
      page: 1,
      totalPages: 1
    };
    const movieResults = { results: [{ id: 1, original_title: "test" }], total_pages: 10, page: 1 } as MovieResults;
    const action = getListOfMoviesSuccess({ movieResults });
    const state = moviesReducer(initialState, action);
    expect(state.movieList).toEqual(movieResults.results);
    expect(state.totalPages).toEqual(movieResults.total_pages);
  });


});
