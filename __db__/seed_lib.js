const mongoose = require('mongoose');
const VideoModel = require('../repositories/model/videos');
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
    media_id: 1,
    location: 'the_dark_knight.mp4',
  },
  {
    media_id: 2,
    location: 'lord_of_the_rings_01.mp4',
  },
  {
    media_id: 3,
    location: 'lord_of_the_rings_02.mp4',
  },
  {
    media_id: 4,
    location: 'lord_of_the_rings_03.mp4',
  },
  {
    media_id: 5,
    location: 'dark.mp4',
  },
  {
    media_id: 6,
    location: 'suits.mp4',
  },
]

async function seedMovies() {
  try {
    await VideoModel.collection.drop();
  } catch (ex) {
    console.log(ex.message);
  }
  await VideoModel.insertMany(movieData);
  mongoose.connection.close();
}

seedMovies();