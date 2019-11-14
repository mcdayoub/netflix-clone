In order to run this app run these commands in the /backend directory

### `npm install`

### `node index.js`

go to
http://localhost:5000/
to play in the GraphQL playground

then in a new terminal window (leave the backend server running)

navigate to the /client directory

and run

### `npm install`

then run

### `npm start`

go to
http://localhost:3000/
to see the frontend of the app

Here are some queries and mutations for the graphql playground.

Since we want to see clicks, copy this into the left side of the playground:
query {
  getMovies {
    name
    id
    clicks
    movieDBID
  }
}

Then hit the play button to see all the clicks for each movie

Here are some others to play with

mutation {
  createMovie(name: "The third movie" movieDBID: "5235421134") {
    name
    id
    clicks
    movieDBID
  }
}

mutation {
  clickMovie(movieDBID: "5235435", name: "The second movie") {
    name
    id
    clicks
    movieDBID
  }
}

query {
  getMovie(movieDBID: "475557") {
    name
    id
    clicks
  }
}
