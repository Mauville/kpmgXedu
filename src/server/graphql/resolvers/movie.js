import { Movie } from '../../models/models';

export default {
  Query: {
    mediaInfo: async (parent, args, context, info) => {
      return Movie.findMovieByTitle(args.title);
    },
    actorMovies: async (parent, args, context, info) => {
      return Movie.actorMovies(args.actor);
    },
    mediaCount: async () => {
      return Movie.totalMediaCount();
    },
    moviesPerCountry: async (parent, args, context, info) => {
      return Movie.moviesPerCountry(args.country);
    },
    moviesPerYear: async (parent, args, context, info) => {
      return Movie.moviesPerYear(args.year);
    }
  }
};
