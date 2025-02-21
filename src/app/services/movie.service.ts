import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'f67a8ff8943e37365abb84917ca8473d'; // 🔹 Reemplaza con tu clave real
  private apiUrl = 'https://api.themoviedb.org/3';

  constructor(private http: HttpClient) {}

  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/movie?query=${query}&api_key=${this.apiKey}&language=es`);
  }

  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}&language=es`);
  }
}
