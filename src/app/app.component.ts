import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importar FormsModule para ngModel
import { CommonModule } from '@angular/common'; // Si usas directivas como ngIf y ngFor
import { RouterModule } from '@angular/router'; // Importar RouterModule para router-outlet

@Component({
  selector: 'app-root',
  standalone: true,  // Hacer que este componente sea independiente
  imports: [FormsModule, CommonModule, RouterModule],  // Importar FormsModule, CommonModule y RouterModule
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  query: string = '';
  movies: any[] = [];
  isLoading: boolean = false;

  searchMovies() {
    this.isLoading = true;
    // Llama a la API de películas aquí
    // Por ejemplo, usando un servicio
    setTimeout(() => {
      // Simula la respuesta de la API
      this.movies = [{ title: 'Movie 1', overview: 'Overview of Movie 1' }, { title: 'Movie 2', overview: 'Overview of Movie 2' }];
      this.isLoading = false;
    }, 2000);
  }
}
