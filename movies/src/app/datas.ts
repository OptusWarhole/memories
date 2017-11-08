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
	title: 'Sin City: A Dame to Kill For',
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
{
	title: 'L\'amour dure trois ans',
	date: '2017-09-23 21:00',
	theater: {
		state: false
	},
	alone:{
		state:true
	}
},
{
	title: 'Kimi no na wa (Your name)',
	date: '2017-03-30 21:00',
	theater: {
		state: false
	},
	alone:{
		state:true
	}
},
{
	title: 'Avengers: Age of Ultron',
	date: '2015-04-22 10:20',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Hama','Abdou','Marvin','Yann','Christophe'] 
	}
},
{
	title: 'Dracula: Untold',
	date: '2014-10-03 20:35',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Alphonse','Romain','Clément'] 
	}
},
{
	title: 'The Necessary Death of Charlie Countryman',
	date: '2014-05-14 22:00',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: '4.90€'
	},
	alone:{
		state:false,
		group: ['Romain','Clément'] 
	}
},
{
	title: 'Whiplash',
	date: '2014-12-14 19:50',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:true
	}
},
{
	title: 'Jupiter Ascending',
	date: '2015-02-15 09:40',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Sophie'] 
	}
},
{
	title: 'Papa ou Maman',
	date: '2015-02-21 09:45',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Sophie'] 
	}
},
{
	title: 'Chapie',
	date: '2015-03-08 09:55',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:true
	}
},
{
	title: 'Dear White People',
	date: '2015-04-09 14:30',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Sophie'] 
	}
},
{
	title: 'Casse tête chinois',
	date: '2013-12-04 22:05',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Laura'] 
	}
},
{
	title: 'Deadpool',
	date: '2016-02-13 15:00',
	theater: {
		state: false,
		name: 'UGC Gobelins',
		price: '4.90€'
	},
	alone:{
		state:false,
		group: ['Sophie'] 
	}
},
{
	title: 'Qu\'est ce qu\'on a fait au bon dieu',
	date: '2014-04-21 22:10',
	theater: {
		state: false,
		name: 'UGC Gobelins',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Laura'] 
	}
},
{
	title: 'The Imitation Game',
	date: '2015-02-05 19:40',
	theater: {
		state: false,
		name: 'UGC Gobelins',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Sophie'] 
	}
},
{
	title: 'Les nouveaux sauvages',
	date: '2015-01-27 09:40',
	theater: {
		state: false,
		name: 'UGC Ciné Cité Bercy',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Sophie'] 
	}
},
{
	title: 'Lucy',
	date: '2014-08-06 22:20',
	theater: {
		state: false,
		name: 'UGC Gobelins',
		price: 'Illimité'
	},
	alone:{
		state:true
	}
},
{
	title: 'Gone Girl',
	date: '2014-11-09 21:20',
	theater: {
		state: false,
		name: 'Pathé Wepler',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Agnès']
	}
},
{
	title: 'Avant l\'hiver',
	date: '2013-12-08 15:35',
	theater: {
		state: false,
		name: 'UGC Gobelins',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Agnès']
	}
},
{
	title: 'The Homesman',
	date: '2014-05-18 18:50',
	theater: {
		state: false,
		name: 'UGC Opéra',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Laura']
	}
},
{
	title: 'The Hobbit: The Battle of the Five Armies',
	date: '2014-12-21 20:15',
	theater: {
		state: false,
		name: 'Pathé Wepler',
		price: '10€'
	},
	alone:{
		state:false,
		group: ['Romain','Clément','Alphonse']
	}
},
{
	title: 'The Hobbit: The Battle of the Five Armies',
	date: '2014-12-21 20:15',
	theater: {
		state: false,
		name: 'Pathé Wepler',
		price: '10€'
	},
	alone:{
		state:false,
		group: ['Romain','Clément','Alphonse']
	}
},
{
	title: 'Focus',
	date: '2015-04-05 14:45',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Sophie']
	}
},
{
	title: 'The Salvation',
	date: '2014-09-01 20:25',
	theater: {
		state: false,
		name: 'UGC Bercy',
		price: 'Illimité'
	},
	alone:{
		state:true
	}
},
{
	title: 'Dragon 2',
	date: '2014-07-16 22:05',
	theater: {
		state: false,
		name: 'UGC Gobelins',
		price: 'Illimité'
	},
	alone:{
		state:true
	}
},
{
	title: 'Ninja Turtles',
	date: '2014-10-22 20:05',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:true
	}
},
{
	title: 'Guardians of The Galaxy',
	date: '2014-08-24 21:50',
	theater: {
		state: false,
		name: 'UGC Gobelins',
		price: 'Illimité'
	},
	alone:{
		state:true
	}
},
{
	title: 'The Voices',
	date: '2014-03-20 14:30',
	theater: {
		state: false,
		name: 'UGC Gobelins',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Sophie']
	}
},
{
	title: 'Star Wars: Episode VII – The Force Awakens',
	date: '2015-12-17 19:05',
	theater: {
		state: false,
		name: 'UGC Ciné Cité Les Halles',
		price: 'Illimité'
	},
	alone:{
		state:true
	}
},
{
	title: 'Zootopie',
	date: '2016-04-09 10:20',
	theater: {
		state: false,
		name: 'UGC Cité Cité Bercy',
		price: '6.70€'
	},
	alone:{
		state:false,
		group: ['Sophie']
	}
},
{
	title: 'Antman',
	date: '2015-07-25 10:00',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: '6.50€'
	},
	alone:{
		state:false,
		group: ['Sophie']
	}
},
{
	title: 'Antman',
	date: '2015-07-25 10:00',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: '6.50€'
	},
	alone:{
		state:false,
		group: ['Sophie']
	}
},
{
	title: 'Fantastic Four',
	date: '2015-08-15 09:40',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: '4.90€'
	},
	alone:{
		state:false,
		group: ['Sophie']
	}
},
{
	title: 'Spectre (James Bond)',
	date: '2015-12-22 21:30',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: '4.90€'
	},
	alone:{
		state:true
	}
},
{
	title: 'Mad Max: Fury Road',
	date: '2015-05-20 09:45',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Sophie']
	}
},
{
	title: 'X-men Apocalypse',
	date: '2016-05-18 11:00',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: 'Illimité'
	},
	alone:{
		state:false,
		group: ['Sophie']
	}
},
{
	title: 'The Purge: Election Year',
	date: '2016-07-22 17:30',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: '4.90€'
	},
	alone:{
		state:false,
		group: ['Hicham','Hama','Marvin','Christophe','Abdou']
	}
},
{
	title: 'The Purge: Election Year',
	date: '2016-07-22 17:30',
	theater: {
		state: false,
		name: 'MK2 Bibliothèque',
		price: '4.90€'
	},
	alone:{
		state:false,
		group: ['Hicham','Hama','Marvin','Christophe','Abdou']
	}
},

];