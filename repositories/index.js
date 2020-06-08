const mongoose = require('mongoose');

(async function connect() {
  mongoose.connection
    .on('error', console.log)
    .on('disconnected', connect)

  return await mongoose.connect('mongodb://localhost:27017/netflix', {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
})();

module.exports = {
  MovieRepository: require('./gateways/movie'),
  VideoRepository: require('./gateways/videos')
};