import { Routes } from '@angular/router';
import { MovieSearchComponent } from './components/movie-search/movie-search.component';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

export const routes: Routes = [
  { path: '', component: MovieSearchComponent }, // Página de búsqueda
  { path: 'movie/:id', component: MovieDetailsComponent } // Página de detalles
];
