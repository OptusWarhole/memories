import { Injectable } from '@angular/core';

import { Movie } from '../movies/movie';
import { MOVIES } from '../datas';

@Injectable()
export class MovieService {
  getMovies(): Promise<Movie[]> {
    return Promise.resolve(MOVIES);
  }
}
