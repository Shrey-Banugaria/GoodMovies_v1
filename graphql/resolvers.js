const User = require('../modules/User/model');
const Genre = require('../modules/Genre/model');
const Movies = require('../modules/Movies/model');
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

const resolvers = {
    Query: {
      users: async () => {
        try {
          const users = await User.find();
          return users;
        } catch (error) {
          return error
        }
      },

      movies: async () => {
        try {
          const movies = await Movies.find().populate({ path: 'genre'});
          return movies;
        } catch (error) {
          return error
        }
      },
    },
    Mutation: {
      addUser: async (_, body) => {
        try {
          const salt = bcrypt.genSaltSync(10);
          body.password = bcrypt.hashSync(body.password, salt);
          const user = await User.create(body);
          return user;
        } catch (error) {
          return error
        }
      },

      addGenre: async (_, body) => {
        try {
          const genre = await Genre.create(body);
          return genre;
        } catch (error) {
          return error
        }
      },

      addMovie: async (_, body) => {
        try {
          const genreIds = body.genre.map((genreId) => new mongoose.Types.ObjectId(genreId))
          body.genre = genreIds
          const movies = await Movies.create(body);
          return movies;
        } catch (error) {
          console.log(error);
          return error
        }
      },
    }
  };
  
  module.exports = resolvers;
  