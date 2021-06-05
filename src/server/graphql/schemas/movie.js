import { gql } from 'apollo-server-express';

export default gql`
  type Media {
    mediatype: String
    title: String
    showID: String
    release_year: Int
    rating: String
    # TODO Change to array
    # listed_in: [String]
    listed_in: String
    duration: String
    # TODO Change to array
    #director: [String
    director: String
    description: String
    date_added: String
    country: String
    # TODO change to array
    # cast: [String]
    cast: String
  }
  type Query {
    #Information
    mediaInfo(title: String): Media
    actorMovies(actor: String): [Media]
    #Stats
    mediaCount: Int
    moviesPerCountry(country: String): Int
    moviesPerYear(year: Int): Int
  }
`;
