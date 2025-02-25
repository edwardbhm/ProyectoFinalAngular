import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Location } from '@angular/common';  // Importa Location para la navegación

import { NgIf, JsonPipe } from '@angular/common'; // Importamos NgIf y JsonPipe

/**
 * Componente que muestra los detalles de una película.
 */
@Component({
  selector: 'app-movie-details',
  standalone: true,
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  imports: [NgIf, JsonPipe] // Agregamos JsonPipe para formatear JSON en la vista
})
export class MovieDetailsComponent {
  /**
   * Objeto que almacena los detalles de la película.
   */
  movie: any;
  
  /**
   * Cadena que representa los géneros de la película.
   */
  genres: string = '';

  /**
   * Constructor del componente.
   * @param route - Servicio para obtener parámetros de la ruta.
   * @param movieService - Servicio para obtener detalles de películas.
   * @param location - Servicio para gestionar la navegación del historial.
   */
  constructor(
    private route: ActivatedRoute, 
    private movieService: MovieService,
    private location: Location  // Inyectamos el servicio Location
  ) {
    // Obtiene el ID de la película desde la URL
    const movieId = this.route.snapshot.params['id'];
    
    console.log("🟢 Movie ID recibido:", movieId);

    // Llama al servicio para obtener los detalles de la película
    this.movieService.getMovieDetails(movieId).subscribe(
      (data: any) => {
        console.log("✅ Datos de la película recibidos:", data);
        this.movie = data;
        this.genres = this.formatGenres(data.genres);
      },
      (error) => {
        console.error("❌ Error al obtener la película:", error);
      }
    );
  }

  /**
   * Formatea la lista de géneros en una cadena separada por comas.
   * @param genres - Lista de géneros de la película.
   * @returns Cadena con los nombres de los géneros separados por comas.
   */
  formatGenres(genres: any[]): string {
    return genres ? genres.map(g => g.name).join(', ') : 'Desconocido';
  }

  /**
   * Método para volver a la página anterior.
   */
  goBack() {
    this.location.back();  // Vuelve a la página anterior en el historial
  }
}
