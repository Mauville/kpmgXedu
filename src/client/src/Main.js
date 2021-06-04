import React from 'react';
import { queries } from './graphql';
import { useQuery } from '@apollo/client';

// MOVIES_PER_COUNTRY
function MoviesPerCountry(countryName) {
  const { loading, error, data } = useQuery(queries.MOVIES_PER_COUNTRY, {
    variables: { country: countryName }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.moviesPerCountry;
}
// MOVIES_PER_YEAR
function MoviesPerYear(movieYear) {
  const { loading, error, data } = useQuery(queries.MOVIES_PER_YEAR, {
    variables: { year: movieYear }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.moviesPerYear;
}
// MEDIA_COUNT
function MediaCount() {
  const { loading, error, data } = useQuery(queries.MEDIA_COUNT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.mediaCount;
}
// // ACTOR_MOVIES
// function ActorMovies(actorName) {
//   const { loading, error, data } = useQuery(queries.ACTOR_MOVIES, {
//     variables: { actor: actorName },
//   });
//
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
//
//   return data;
// }
// // MEDIA_INFO
// function MediaInfo(mediaTitle) {
//   const { loading, error, data } = useQuery(queries.MEDIA_INFO, {
//     variables: { title: mediaTitle },
//   });
//
//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error :(</p>;
//
//   return data;
// }

function Main() {
  console.group(MoviesPerYear(2010));
  console.group(MoviesPerCountry('México'));
  console.group(MediaCount());
  // console.group(ActorMovies('Demián Bichir'));
  // console.group(MediaInfo('3%'));

  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <MediaCount />
    </div>
  );
}

export default Main;
