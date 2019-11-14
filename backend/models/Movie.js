const { model, Schema } = require('mongoose');

//Schema for movies
const movieSchema = new Schema({
  name: String,
  clicks: Number,
  movieDBID: String
});

module.exports = model('Movie', movieSchema);
