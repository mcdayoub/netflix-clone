const { gql } = require('apollo-server');

//TypeDefs for Movie, Query, and Mutation
module.exports = gql`
  type Movie {
    id: ID!
    name: String!
    clicks: Int!
    movieDBID: String!
  }
  type Query {
    getMovie(movieDBID: String!): Movie!
    getMovies: [Movie]
  }
  type Mutation {
    createMovie(movieDBID: String!, name: String!): Movie!
    clickMovie(movieDBID: String!, name: String!): Movie!
  }
`;
