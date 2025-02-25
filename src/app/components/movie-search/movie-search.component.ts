import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // Importamos NgFor para iterar listas en la plantilla
import { FormsModule } from '@angular/forms'; // Importamos FormsModule para el enlace de datos en formularios
import { MovieService } from '../../services/movie.service'; // Importamos el servicio de películas
import { RouterModule } from '@angular/router'; // Importamos RouterModule para la navegación

/**
 * Componente para buscar películas mediante un formulario de búsqueda.
 */
@Component({
  selector: 'app-movie-search',
  standalone: true,
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  imports: [NgFor, FormsModule, RouterModule] // Módulos necesarios para la plantilla
})
export class MovieSearchComponent {
  /**
   * Cadena que almacena la consulta de búsqueda del usuario.
   */
  searchQuery = '';

  /**
   * Lista de películas obtenidas de la búsqueda.
   */
  movies: any[] = [];

  /**
   * Constructor del componente.
   * @param movieService - Servicio para buscar películas en la API.
   */
  constructor(private movieService: MovieService) {}

  /**
   * Método para buscar películas basado en la consulta del usuario.
   * Hace una petición al servicio solo si la consulta no está vacía.
   */
  searchMovies() {
    if (this.searchQuery.length > 0) {
      this.movieService.searchMovies(this.searchQuery).subscribe((data: any) => {
        this.movies = data.results;
      });
    }
  }
}
