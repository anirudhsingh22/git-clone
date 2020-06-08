const mongoose = require('mongoose');
const MediaModel = require('../repositories/model/media');
(async function connect() {
  mongoose.connection
    .on('error', console.log)

  await mongoose.connect('mongodb://localhost:27017/netflix', {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
})();

const movieData = [
  {
    _id: 1,
    name: 'The Dark Knight',
    release_date: '06/23/2008',
    genre: 'Action',
    rating: 9.0,
    view_count: 5000
  },
  {
    _id: 2,
    name: 'Lord of the rings: Fellowship of the rind',
    release_date: '06/23/2001',
    genre: 'Fantasy',
    rating: 8.5,
    view_count: 4200
  },
  {
    _id: 3,
    name: 'Lord of the rings: Two Towers',
    release_date: '08/23/2002',
    genre: 'Fantasy',
    rating: 8.2,
    view_count: 4800
  },
  {
    _id: 4,
    name: 'Lord of the rings: Return of the king',
    release_date: '12/23/2003',
    genre: 'Fantasy',
    rating: 9.0,
    view_count: 5400
  },
  {
    _id: 5,
    name: 'Dark',
    release_date: '06/27/2018',
    genre: 'Mystery',
    rating: 8.5,
    view_count: 2000
  },
  {
    _id: 6,
    name: 'Suits',
    release_date: '06/12/2008',
    genre: 'Drama',
    rating: 8.2,
    view_count: 5800
  },
]

async function seedMovies() {
  await MediaModel.collection.drop();
  await MediaModel.insertMany(movieData);
  mongoose.connection.close();
}

seedMovies();