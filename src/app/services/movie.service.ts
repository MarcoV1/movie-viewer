import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {MovieResults} from "../types/movie-results.interface";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllMovies(page: number): Observable<MovieResults> {
    return this.httpClient
      .get(`${this.apiUrl}/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`,
         ) as Observable<MovieResults>;

  }
}
