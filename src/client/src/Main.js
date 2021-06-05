import React, { Component, Fragment, useState } from 'react';
import { queries } from './graphql';
//import { useQuery } from '@apollo/client';
import Busqueda from './components/Busqueda';
import Resultados from './components/Resultados';
import { render } from 'react-dom';

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

class Main extends Component {
  state = {
    data: [],
    option: 1
  };
  /*
// MOVIES_PER_COUNTRY
MoviesPerCountry = (countryName) => {
  const { loading, error, data } = useQuery(queries.MOVIES_PER_COUNTRY, {
    variables: { country: countryName }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.moviesPerCountry;
}


// MOVIES_PER_YEAR
MoviesPerYear = (movieYear) => {
  const { loading, error, data } = useQuery(queries.MOVIES_PER_YEAR, {
    variables: { year: movieYear }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  return data.moviesPerYear;
}
// MEDIA_COUNT
MediaCount = () => {
  const { loading, error, data } = useQuery(queries.MEDIA_COUNT);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.mediaCount;
}*/

  PerCountry = filter => {
    this.props.client
      .query({
        query: queries.MOVIES_PER_COUNTRY,
        variables: { country: filter }
      })
      .then(data => {
        this.setState({ data: data.data });
      })
      .catch(e => {
        console.log(e);
      });
  };

  PerTitle = filter => {
    console.log(filter);
    this.props.client
      .query({
        query: queries.MEDIA_INFO,
        variables: { title: filter }
      })
      .then(data => {
        this.setState({ data: data.data });
      })
      .catch(e => {
        console.log(e);
      });
  };

  PerCount = filter => {
    console.log(filter);
    this.props.client
      .query({
        query: queries.MEDIA_COUNT,
        variables: { mediaCount: filter }
      })
      .then(data => {
        this.setState({ data: data.data });
      })
      .catch(e => {
        console.log(e);
      });
  };

  PerYear = filter => {
    console.log(filter);
    this.props.client
      .query({
        query: queries.MOVIES_PER_YEAR,
        variables: { year: filter }
      })
      .then(data => {
        this.setState({ data: data.data });
      })
      .catch(e => {
        console.log(e);
      });
  };

  PerActor = filter => {
    console.log(filter);
    this.props.client
      .query({
        query: queries.ACTOR_MOVIES,
        variables: { actor: filter }
      })
      .then(data => {
        this.setState({ data: data.data });
      })
      .catch(e => {
        console.log(e);
      });
  };

  changeOption = opt => {
    this.setState({ option: opt.target.value });
  };

  render() {
    const { data, option } = this.state;

    return (
      <Fragment>
        <h2>My first Apollo app 🚀</h2>
        <div className="container">
          <div className="row">
            <div>
              <Busqueda
                changeOption={this.changeOption}
                option={option}
                execute={{
                  PerCountry: this.PerCountry,
                  PerTitle: this.PerTitle,
                  PerCount: this.PerCount,
                  PerYear: this.PerYear,
                  PerActor: this.PerActor
                }}
              />
            </div>
            <div>
              <Resultados data={data} option={option} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Main;
