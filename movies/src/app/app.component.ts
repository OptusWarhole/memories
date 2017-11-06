import { Component, OnInit } from '@angular/core';

import { Movie } from './movies/movie';
import { MovieService } from './services/movie.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	// styleUrls: ['./app.component.css'],
	providers: [MovieService]
})


export class AppComponent implements OnInit{
	title = 'app';

	movies: Movie[];
	selectedMovie: Movie;

	constructor(private movieService: MovieService) { }

	getMovies(): void {
		this.movieService.getMovies().then(movies => this.movies = movies);
	}

	ngOnInit(): void {
		this.getMovies();
	}

	onSelect(movie: Movie): void {
		this.selectedMovie = movie;
	}
}
