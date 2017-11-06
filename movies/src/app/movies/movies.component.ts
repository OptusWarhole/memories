import { Component, Input } from '@angular/core';

import { Movie } from './movie';


 
@Component({
  selector: 'movieMovie-detail',
  template: `
    <div *ngIf="hero">
      <h2>{{movieMovie.name}} details!</h2>
      <div><label>id: </label>{{movieMovie.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="movie.name" placeholder="name"/>
      </div>
    </div>
  `
})
export class Movies {
  @Input() movie: Movie;
}
