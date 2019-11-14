const Movie = require('../../models/Movie');

module.exports = {
  Query: {
    //Get a movie with the ID from MovieDB
    async getMovie(_, { movieDBID }) {
      try {
        const movie = await Movie.findOne({ movieDBID: movieDBID });
        if (movie) {
          return movie;
        } else {
          throw new Error('Movie not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    },
    //Get all movies
    async getMovies() {
      try {
        const movies = await Movie.find();
        return movies;
      } catch (err) {
        throw new Error(err);
      }
    }
  },
  Mutation: {
    //Create a movie yourself
    async createMovie(_, { name, movieDBID }) {
      if (name.trim() === '') {
        throw new Error('Movie must have a name');
      }
      const newMovie = new Movie({
        name,
        clicks: 0,
        movieDBID: movieDBID
      });
      const movie = await newMovie.save();
      return movie;
    },
    //Click on a movie
    async clickMovie(_, { movieDBID, name }) {
      const movie = await Movie.findOne({ movieDBID: movieDBID });

      //If there is a movie with that MovieDB id then increment click
      if (movie) {
        const newClicks = movie.clicks + 1;
        const movieId = movie.id;
        const movieUpdated = await Movie.findByIdAndUpdate(movieId, {
          clicks: newClicks
        });
        return movieUpdated;

        //If no movie exists in DB yet, create it and add a click
      } else if (!movie) {
        const newMovie = new Movie({
          name,
          clicks: 1,
          movieDBID: movieDBID
        });
        const movie = await newMovie.save();
        return movie;
      }
    }
  }
};
