import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Dimmer, Loader, Grid } from 'semantic-ui-react';

import MovieCard from './MovieCard';

export default function Home() {
  //This hook has the data that is fetched from the MovieDB API
  const [data, setData] = useState([]);

  //This hook has control of the loading
  const [isLoading, setIsLoading] = useState(false);

  //This effect hook fetches the data via axios from the Movie API
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}`
      );
      setData(result.data.results);
      setIsLoading(false);
    };
    fetchData();
  }, []);

  return (
    <>
      <h1>Popular Movies</h1>
      <Grid columns={4}>
        {isLoading ? (
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>
        ) : (
          data &&
          data.map(item => (
            <Grid.Column key={item.id}>
              <MovieCard movie={item}></MovieCard>
            </Grid.Column>
          ))
        )}
      </Grid>
    </>
  );
}
