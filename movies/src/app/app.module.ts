import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }    from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieService }    from './services/movie.service';

import { SortByPipe } from './pipes/sort-by.pipe';


@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    MoviesComponent,
    SortByPipe
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
