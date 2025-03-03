import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = 'f67a8ff8943e37365abb84917ca8473d';
  private apiUrl = 'https://api.themoviedb.org/3';
  private searchHistoryKey = 'searchHistory';

  constructor(private http: HttpClient) {}

  /**
   * Realiza una búsqueda y guarda el término en el historial.
   */
  searchMovies(query: string): Observable<any> {
    if (query.trim()) {
      this.saveSearch(query); // Guardar en historial
    }
    return this.http.get(`${this.apiUrl}/search/movie?query=${query}&api_key=${this.apiKey}&language=es`);
  }

  /**
   * Obtiene los detalles de una película específica.
   */
  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}&language=es`);
  }

  /**
   * Guarda una búsqueda en el historial y mantiene solo las 5 últimas.
   */
  saveSearch(query: string) {
    let history = this.getSearchHistory();
    history = history.filter(item => item !== query); // Evita duplicados
    history.unshift(query); // Agrega al inicio
    history = history.slice(0, 5); // Mantiene solo 5 búsquedas
    localStorage.setItem(this.searchHistoryKey, JSON.stringify(history));
  }

  /**
   * Recupera el historial de búsquedas.
   */
  getSearchHistory(): string[] {
    const history = localStorage.getItem(this.searchHistoryKey);
    return history ? JSON.parse(history) : [];
  }

  /**
   * Borra todo el historial de búsquedas.
   */
  clearSearchHistory() {
    localStorage.removeItem(this.searchHistoryKey);
  }
}
