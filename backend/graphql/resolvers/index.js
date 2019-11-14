const moviesResolvers = require('./movies');

//Normally you would have more than just Movies here
//I use this format to organize exports for different resolvers
module.exports = {
  Query: {
    ...moviesResolvers.Query
  },
  Mutation: {
    ...moviesResolvers.Mutation
  }
};
