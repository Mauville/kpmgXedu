import { gql } from 'apollo-server-express';

export default gql`
  type Media {
    showID: String
    type: String
    title: String
    release_year: Int
    rating: String
    listed_in: [String]
    duration: String
    director: [String]
    description: String
    date_added: String
    country: String
    cast: [String]
  }
  type Query {
    #Information
    mediaInfo(title: String): [Media]
    actorMovies(actor: String): [Media]
    #Stats
    mediaCount: Int
    moviesPerCountry(country: String): Int
    moviesPerYear(year: Int): Int
  }
`;
