import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'title' })
export class SearchByTitlePipe implements PipeTransform {
	transform(titles: any, searchText: any): any {
		if(searchText == null){
			return titles;
		}else{
			return titles.filter(function(movie){
				return movie.title.toLowerCase().indexOf(searchText.toLowerCase()) > -1;
			})
		}
	}
}