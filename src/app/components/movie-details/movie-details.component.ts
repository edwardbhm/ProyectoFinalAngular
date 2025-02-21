import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { Location } from '@angular/common';  // Importa Location

import { NgIf, JsonPipe } from '@angular/common'; // 👈 Importamos JsonPipe

@Component({
  selector: 'app-movie-details',
  standalone: true,
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css'],
  imports: [NgIf, JsonPipe] // 👈 Agregamos JsonPipe aquí
})
export class MovieDetailsComponent {
  movie: any;
  genres: string = '';

  // Inyectamos Location en el constructor
  constructor(
    private route: ActivatedRoute, 
    private movieService: MovieService,
    private location: Location  // Inyectamos el servicio Location
  ) {
    const movieId = this.route.snapshot.params['id'];
    
    console.log("🟢 Movie ID recibido:", movieId);

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

  formatGenres(genres: any[]): string {
    return genres ? genres.map(g => g.name).join(', ') : 'Desconocido';
  }

  // Método para volver a la página anterior
  goBack() {
    this.location.back();  // Vuelve a la página anterior en el historial
  }
}
