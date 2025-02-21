import { Component } from '@angular/core';
import { NgFor } from '@angular/common'; // ✅ Solo deja NgFor si lo usas
import { FormsModule } from '@angular/forms';
import { MovieService } from '../../services/movie.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  templateUrl: './movie-search.component.html',
  styleUrls: ['./movie-search.component.css'],
  imports: [NgFor, FormsModule, RouterModule] // ✅ Sin NgIf
})
export class MovieSearchComponent {
  searchQuery = '';
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  searchMovies() {
    if (this.searchQuery.length > 0) {
      this.movieService.searchMovies(this.searchQuery).subscribe((data: any) => {
        this.movies = data.results;
      });
    }
  }
}
