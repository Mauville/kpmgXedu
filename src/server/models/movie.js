/*
 Defines a schema and builds a model for a movie object.
 Required reading: https://mongoosejs.com/docs/index.html
 Methods are queries that get executed by Mongo but are written using Mongoose.

 Required methods are:
     Queries to obtain detailed information about each of the entities in the database
TODO    Given a movie name
           Obtain the director, cast, countries and release year
TODO    Given an actor name
           Obtain a list with the movies and a list with the TV shows where he/she has participated
TODO    Given a TV show name
           Obtain the director, cast, countries and release year
*/

import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const movieSchema = new Schema({
  show_id: String,
  type: String,
  title: String,
  release_year: Number,
  rating: String,
  listed_in: [String],
  duration: String,
  director: [String],
  description: String,
  date_added: String,
  country: String,
  cast: [String]
});

// Movie with title
movieSchema.statics.findMovieByTitle = function(movieTitle) {
  console.log('Received movietitle from GraphQL: ', movieTitle);
  this.findById(movieTitle, function(err, docs) {
    if (err) throw err;
    console.log('This is what Mongoose Returned: ', JSON.stringify(docs));
  });
  return this.find({ title: movieTitle });
};

// Given an actor name Obtain a list with the movies and a list with the TV shows where he/she has participated
movieSchema.statics.actorMovies = async function(actorName) {
  return this.find({ cast: actorName });
};

// Total number of movies and TV shows
movieSchema.statics.totalMediaCount = async function() {
  return this.estimatedDocumentCount();
};

// Total number of movies for a given country
movieSchema.statics.moviesPerCountry = async function(country) {
  return this.countDocuments({ type: 'Movie', country: country });
};

// Total number of TV shows for a given release year
movieSchema.statics.moviesPerYear = async function(year) {
  return this.countDocuments({ type: 'TV Show', release_year: year });
};

const Movie = model('movies', movieSchema);

export default Movie;
