import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiUrl: string = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getAllMovies(): Observable<any> {

    return this.httpClient
      .get(`${this.apiUrl}/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc`,
         ) as Observable<any>;

  }
}
