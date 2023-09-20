import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieDetailsComponent } from './movie-details.component';

describe('MovieDetailsComponent', () => {
  let component: MovieDetailsComponent;
  let fixture: ComponentFixture<MovieDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display movie details correctly', () => {
    const mockMovie = {
      id: 1,
      original_title: 'Movie 1',
      overview: 'Description',
      vote_average: 8.5,
      release_date: '2023-09-28',
    };

    component.selectedMovie = mockMovie;
    fixture.detectChanges();

    const titleElement = fixture.nativeElement.querySelector('h2');
    const descriptionElement = fixture.nativeElement.querySelector('p');

    expect(titleElement.textContent).toContain(mockMovie.original_title);
    expect(descriptionElement.textContent).toContain(mockMovie.overview);
  });
});
