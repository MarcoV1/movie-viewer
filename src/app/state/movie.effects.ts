import {Actions, createEffect, ofType} from "@ngrx/effects";
import {catchError, map, of, switchMap} from "rxjs";
import * as MovieActions from "./movie.actions";
import {Injectable} from "@angular/core";
import {MovieService} from "../services/movie.service";

@Injectable()
export class MovieEffects {

  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MovieActions.getListOfMovies.type, MovieActions.getListOfMovies),
      switchMap((action) =>
        this.movieService.getAllMovies(action.currentPage).pipe(
          map((movieResults) =>
            MovieActions.getListOfMoviesSuccess({ movieResults: movieResults,  })
          ),
          catchError((error) =>
            of(MovieActions.getListOfMoviesFailed({ error: error }))
          )
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private movieService: MovieService
  ) {}
}
