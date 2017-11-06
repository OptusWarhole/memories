import { Component, Input } from '@angular/core';

import { Movie } from './movie';


 
@Component({
  selector: 'movies',
  template: `
    test
  `
})
export class MoviesComponent {
  @Input() movie: Movie;
}
