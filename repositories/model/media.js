const mongoose = require('mongoose');

const MediaSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  release_date: { type: Date, default: Date.now },
  genre: String,
  rating: Number,
  view_count: Number
});

const MediaModel = mongoose.model('Media', MediaSchema);

module.exports = MediaModel;