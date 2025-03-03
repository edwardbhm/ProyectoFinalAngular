import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  imports: [CommonModule, FormsModule, RouterModule] // ✅ Asegurar que CommonModule está aquí
})
export class MovieSearchComponent implements OnInit {
  searchQuery = '';
  movies: any[] = [];
  searchHistory: string[] = [];

  constructor(private movieService: MovieService) {}

  /**
   * Cargar el historial al iniciar el componente.
   */
  ngOnInit() {
    this.loadSearchHistory();
  }

  /**
   * Busca películas y actualiza el historial.
   */
  searchMovies() {
    if (this.searchQuery.trim()) {
      this.movieService.searchMovies(this.searchQuery).subscribe((data: any) => {
        this.movies = data.results;
        this.loadSearchHistory(); // Actualizar historial en la vista
      });
    }
  }

  /**
   * Cargar historial de LocalStorage.
   */
  loadSearchHistory() {
    this.searchHistory = this.movieService.getSearchHistory();
    console.log('Historial actualizado:', this.searchHistory); // 🔍 Debugging
  }

  /**
   * Usar una búsqueda reciente.
   */
  useRecentSearch(query: string) {
    this.searchQuery = query;
    this.searchMovies();
  }

  /**
   * Borrar historial y actualizar la vista.
   */
  clearHistory() {
    this.movieService.clearSearchHistory();
    this.searchHistory = []; // Vaciar la lista en la vista
  }
}
