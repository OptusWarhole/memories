import { Component, Input, OnInit }  from '@angular/core';
import { Router }                    from '@angular/router';

import { Movie } from './movie';
import { MovieService } from '../services/movie.service';

import { OrderByPipe } from '../pipes/order-by.pipe';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
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
}