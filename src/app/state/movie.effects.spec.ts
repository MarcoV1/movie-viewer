import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {MovieService} from "../services/movie.service";
import {MovieEffects} from "./movie.effects";
import {MovieResults} from "../types/movie-results.interface";
import {getListOfMovies, getListOfMoviesSuccess} from "./movie.actions";

describe('Movie Effects', () => {
  let actions$: Observable<Action>;
  let effects: MovieEffects;
  let movieService: any;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        MovieEffects,
        provideMockActions(() => actions$),
        {
          provide: MovieService,
          useValue: jasmine.createSpyObj('movieService', ['getAllMovies']),
        },
      ],
    });

    effects = TestBed.inject(MovieEffects);
    movieService = TestBed.inject(MovieService);
  });

  it('should dispatch LoadMoviesSuccess on successful API call', () => {
    const movieResults = { results: [{ id: 1, original_title: "test" }], total_pages: 10, page: 1 } as MovieResults;

    movieService.getAllMovies.and.returnValue(of({ results: movieResults.results, total_pages: movieResults.total_pages, page: movieResults.page }));

    actions$ = of(getListOfMovies({ currentPage: 1 }));
    effects.loadMovies$.subscribe((action) => {
      expect(action).toEqual(getListOfMoviesSuccess({ movieResults }));
    });
  });
});
