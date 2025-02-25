import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

/**
 * Servicio para interactuar con la API de The Movie Database (TMDb).
 */
@Injectable({
  providedIn: 'root'
})
export class MovieService {
  /**
   * Clave de API para autenticar las solicitudes a TMDb.
   * 🔹 Reemplaza con tu clave real antes de usar en producción.
   */
  private apiKey = 'f67a8ff8943e37365abb84917ca8473d';
  
  /**
   * URL base de la API de TMDb.
   */
  private apiUrl = 'https://api.themoviedb.org/3';

  /**
   * Constructor del servicio.
   * @param http - Cliente HTTP para realizar solicitudes a la API.
   */
  constructor(private http: HttpClient) {}

  /**
   * Busca películas basadas en una consulta de búsqueda.
   * @param query - Término de búsqueda ingresado por el usuario.
   * @returns Un Observable con los resultados de la búsqueda.
   */
  searchMovies(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/search/movie?query=${query}&api_key=${this.apiKey}&language=es`);
  }

  /**
   * Obtiene los detalles de una película específica.
   * @param movieId - ID de la película a consultar.
   * @returns Un Observable con los detalles de la película.
   */
  getMovieDetails(movieId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/movie/${movieId}?api_key=${this.apiKey}&language=es`);
  }
}
