import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }    from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { MovieService }    from './services/movie.service';

import { SearchByTitlePipe } from './pipes/search-by-title.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';


import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    InfiniteScrollModule
  ],
  declarations: [
    AppComponent,
    MoviesComponent,
    SearchByTitlePipe,
    OrderByPipe,
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }