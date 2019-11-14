import React from 'react';
import { Card, Image } from 'semantic-ui-react';
import gql from 'graphql-tag';
import { useMutation } from '@apollo/react-hooks';
import posed from 'react-pose';

//GraphQL Mutation that handles the clicking logic
const CLICK_MOVIE_MUTATION = gql`
  mutation clickMovie($name: String!, $movieDBID: String!) {
    clickMovie(name: $name, movieDBID: $movieDBID) {
      name
      id
      clicks
      movieDBID
    }
  }
`;

//Posed is a cool animation library for the hover effect
const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1
  },
  hover: {
    scale: 1.1
  },
  press: {
    scale: 1.15
  }
});

function MovieCard({ movie }) {
  const [clickMovie] = useMutation(CLICK_MOVIE_MUTATION);
  //This handles the clicking logic. The variables with movie data
  //are passed in as args in the graphql mutation.
  function handleClick() {
    clickMovie({
      variables: { movieDBID: movie.id.toString(), name: movie.title }
    });
  }
  return (
    <Box>
      <Card fluid onClick={() => handleClick()} className="movie">
        <Image
          src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          width="500px"
        ></Image>
        <Card.Content style={{ textAlign: 'center' }}>
          <Card.Header>
            <h3>{movie.title}</h3>
          </Card.Header>
        </Card.Content>
      </Card>
    </Box>
  );
}
export default MovieCard;
