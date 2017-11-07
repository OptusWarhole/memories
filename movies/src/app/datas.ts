import { Movie } from './movies/movie';

export const MOVIES: Movie[] = [
{
	title: 'Kingsman: The Golden Circle',
	date: '2017-10-13 15:50',
	theater: {
		state: true,
		name: 'UGC Ciné Cité Paris 19',
		price: '8.20€'
	},
	alone:{
		state:true
	}
},
{
	title: 'It',
	date: '2017-10-13 15:50',
	theater: {
		state: true,
		name: 'UGC Ciné Cité Paris 19',
		price: '8.20€'
	},
	alone:{
		state:true
	}
},
{
	title: 'Logan',
	date: '2017-10-13 15:50',
	theater: {
		state: true,
		name: 'UGC Ciné Cité Paris 19',
		price: '8.20€'
	},
	alone:{
		state:false,
		group: ['Clément', 'Alphonse'] 
	}
},
{
	title: 'Thor: Ragnarok',
	date: '2017-10-26 20:30',
	theater: {
		state: true,
		name: 'UGC Ciné Cité Paris 19',
		price: '8.20€'
	},
	alone:{
		state:true
	}
},
{
	title: 'Blade Runner 2049: Ragnarok',
	date: '2017-10-04 20:00',
	theater: {
		state: true,
		name: 'UGC Ciné Cité Paris 19',
		price: '8.20€'
	},
	alone:{
		state:true
	}
}

];