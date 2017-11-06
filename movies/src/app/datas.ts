import { Movie } from './movies/movie';

export const MOVIES: Movie[] = [
  {
    name: 'Kingsman: The Golden Circle',
    date: '2017-10-13 15:50',
    theater: {
      state: false,
      name: 'UGC Ciné Cité Paris 19'
    },
    alone:{
      state:true
    }
  },
  {
    name: 'It',
    date: '2017-10-13 15:50',
    theater: {
      state: true,
      name: 'UGC Ciné Cité Paris 19'
    },
    alone:{
      state:true,
    }
  },
  {
    name: 'Logan',
    date: '2017-10-13 15:50',
    theater: {
      state: true,
      name: 'UGC Ciné Cité Paris 19'
    },
    alone:{
      state:false,
      group: ['Clément', 'Alphonse'] 
    }
  }
];