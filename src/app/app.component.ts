import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel
import { CommonModule } from '@angular/common'; // Importar CommonModule para directivas como ngIf y ngFor
import { RouterModule } from '@angular/router'; // Importar RouterModule para router-outlet

/**
 * Componente principal de la aplicación.
 */
@Component({
  selector: 'app-root',
  standalone: true,  // Hacer que este componente sea independiente
  imports: [FormsModule, CommonModule, RouterModule],  // Importar FormsModule, CommonModule y RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /**
   * Cadena utilizada para la búsqueda de películas.
   */
  query: string = '';

  /**
   * Lista de películas obtenidas de la búsqueda.
   */
  movies: any[] = [];

  /**
   * Indica si la búsqueda está en proceso.
   */
  isLoading: boolean = false;

  /**
   * Método para buscar películas basado en la consulta del usuario.
   * Simula una llamada a la API estableciendo un tiempo de espera.
   */
  searchMovies() {
    this.isLoading = true;
    // Simulación de llamada a la API de películas
    setTimeout(() => {
      // Simula la respuesta de la API con datos ficticios
      this.movies = [
        { title: 'Movie 1', overview: 'Overview of Movie 1' }, 
        { title: 'Movie 2', overview: 'Overview of Movie 2' }
      ];
      this.isLoading = false;
    }, 2000);
  }
}
