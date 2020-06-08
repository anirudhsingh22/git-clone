const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({
  media_id: Number,
  location: String,
});

const VideoModel = mongoose.model('Video', VideoSchema);

module.exports = VideoModel;