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
	date: '2017-10-07 10:30',
	theater: {
		state: true,
		name: 'UGC Ciné Cité Paris 19',
		price: '6.70€'
	},
	alone:{
		state:false,
		group: ['Sophie'] 
	}
},
{
	title: 'Logan',
	date: '2017-03-05 15:50',
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
},
{
	title: 'The Mummy',
	date: '2017-06-18 10:20',
	theater: {
		state: true,
		name: 'UGC Ciné Cité Paris 19',
		price: '6.50€'
	},
	alone:{
		state:true
	}
},
{
	title: 'Beauty and the Beast',
	date: '2017-04-17 14:25',
	theater: {
		state: true,
		name: 'UGC Bercy',
		price: '7.90€'
	},
	alone:{
		state:false,
		group: ['Sophie'] 
	}
},
{
	title: 'Captain America: The Winter Soldier',
	date: '2017-04-30 11:55',
	theater: {
		state: true,
		name: 'UGC Ciné Cité Les Halles',
		price: '7.20€'
	},
	alone:{
		state:true
	}
},
{
	title: 'La La Land',
	date: '2017-01-29 14:45',
	theater: {
		state: true,
		name: 'MK2 Bibliothèque',
		price: '7.90€'
	},
	alone:{
		state:false,
		group: ['Sophie'] 
	}
},
{
	title: 'Spider-Man: Homecoming',
	date: '2017-10-07 10:30',
	theater: {
		state: true,
		name: 'UGC Ciné Cité Paris 19',
		price: '7.90€'
	},
	alone:{
		state:true
	}
},
{
	title: 'Fantastic Beasts and Where to Find them',
	date: '2016-11-26 09:15',
	theater: {
		state: true,
		name: 'UGC Ciné Cité Les Halles',
		price: '6.70€'
	},
	alone:{
		state:false,
		group: ['Sophie'] 
	}
},
{
	title: 'L\'ex de ma vie',
	date: '2014-06-26 22:20',
	theater: {
		state: true,
		name: 'UGC Gobelins',
		price: 'Illimité'
	},
	alone:{
		state:true,
	}
},
{
	title: 'Five',
	date: '2016-05-13 20:05',
	theater: {
		state: true,
		name: 'UGC Ciné Cité Paris 19',
		price: '4.90€'
	},
	alone:{
		state:false,
		group: ['Sophie','Agnès','Clotaire'] 
	}
},
{
	title: 'Black Coal',
	date: '2014-06-11 22:10',
	theater: {
		state: true,
		name: 'UGC Gobelins',
		price: '4.90€'
	},
	alone:{
		state:false,
		group: ['Agnès'] 
	}
},
{
	title: 'Jurassic World',
	date: '2015-06-16 20:00',
	theater: {
		state: true,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:true
	}
},
{
	title: 'Sin City 2',
	date: '2014-09-30 19:40',
	theater: {
		state: true,
		name: 'UGC Gobelins',
		price: 'Illimité'
	},
	alone:{
		state:true
	}
},
{
	title: 'Le rôle de ma vie',
	date: '2014-08-18 19:40',
	theater: {
		state: true,
		name: 'UGC Gobelins',
		price: 'Illimité'
	},
	alone:{
		state:true
	}
},
{
	title: 'Godzilla',
	date: '2014-05-15 21:50',
	theater: {
		state: true,
		name: 'UGC Gobelins',
		price: 'Illimité'
	},
	alone:{
		state:true
	}
},
{
	title: 'Le sel de la terre',
	date: '2014-10-20 19:45',
	theater: {
		state: true,
		name: 'MK2 Quai de Seine',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Laura'] 
	}
},
{
	title: 'La venus à la fourrure',
	date: '2013-11-17 20:15',
	theater: {
		state: true,
		name: 'UGC Gobelins',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Laura'] 
	}
},
{
	title: 'Snowpiercer',
	date: '2013-11-13 15:45',
	theater: {
		state: true,
		name: 'MK2 Quai de Seine',
		price: 'Illimité'
	},
	alone:{
		state:true
	}
},
{
	title: 'Noé',
	date: '2014-04-10 21:30',
	theater: {
		state: true,
		name: 'UGC Gobelins',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Laura'] 
	}
},
{
	title: 'Transcendance',
	date: '2014-06-25 22:00',
	theater: {
		state: true,
		name: 'UGC Gobelins',
		price: 'Illimité'
	},
	alone:{
		state:true,
	}
},
{
	title: 'Mission Impossible: Rogue Nation',
	date: '2015-08-12 10:00',
	theater: {
		state: true,
		name: 'UGC Ciné Cité Paris 19',
		price: '4.90€'
	},
	alone:{
		state:false,
		group: ['Sophie','Agnès'] 
	}
},
{
	title: 'Fury',
	date: '2014-10-24 21:55',
	theater: {
		state: true,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Romain', 'Alphonse','Clément'] 
	}
},
{
	title: 'Kingsman: The Secret Service',
	date: '2015-03-23 14:25',
	theater: {
		state: true,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Sophie'] 
	}
},
{
	title: 'I Am Not Your Negro',
	date: '2017-10-23 21:00',
	theater: {
		state: false
	},
	alone:{
		state:false,
		group: ['Magali','Alphonse'] 
	}
},

];