import { Component, Input, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Movie } from './movie';
import { MovieService } from '../services/movie.service';



@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
})
export class MoviesComponent implements OnInit {
  @Input() movie: Movie;

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
