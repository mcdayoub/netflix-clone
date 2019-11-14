const { ApolloServer } = require('apollo-server');
const mongoose = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');
const { MONGODB } = require('./config.js');

//Apollo Server setup
const server = new ApolloServer({
  typeDefs,
  resolvers
});

//Mongoose and MongoDB setup
mongoose
  .connect(MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('MongoDB Connected');
    return server.listen({ port: process.env.PORT || 5000 });
  })
  .then(res => {
    console.log(`Server running at ${res.url}`);
  });
