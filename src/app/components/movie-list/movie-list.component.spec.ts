import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import {StoreModule} from "@ngrx/store";
import {moviesReducer} from "../../state/movie.reducer";

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(moviesReducer),
      ],
      declarations: [ MovieListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty movie list by default', () => {
    expect(component.movieList).toEqual([]);
  });

  it('should update the movie list when data is fetched', () => {
    const mockMovies = [
      { id: 1, original_title: "test" },
      { id: 2, original_title: "test2" },
    ];

    component.movieList = mockMovies;

    expect(component.movieList).toEqual(mockMovies);
  });

  it('should emit a movie selection event when a movie is clicked', () => {
    spyOn(component.clickedMovie, 'emit');

    const mockMovie = { id: 1, original_title: "test" };
    component.onMovieClick(mockMovie);

    expect(component.clickedMovie.emit).toHaveBeenCalledWith(mockMovie);
  });
});
