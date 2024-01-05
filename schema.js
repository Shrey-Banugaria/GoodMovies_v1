const gql = require('graphql-tag');

const typeDefs = gql`
  type User{
      name: String!
      email: String!
      password: String!
      createdAt: String!
      id: ID!
      role: String! # Roles are -> User, Director, Actor, Artist
      likedMovies: [Movies]
      likedMoviesCount: Int
      likedWebSeries: [Series]
      likedWebSeriesCount: Int
      likedYVideos: [YTVideo]
      likedVideosCount: Int
      mustWatchMovies: [Movies]
      mustWatchWebSeries: [Series]
      mustWatchYTVideos: [YTVideo]
  }
  type Genre {
    name: String!
    id: ID!
    description: String!
    metadata: String!
  }

  type Movies{
    id: ID!
    title: String!
    description: String!
    genre: [Genre]!
    image: String!
    releaseDate: String
    likedCount: Int
    MustWatchCount: Int
    director: [User]
  }
  
  type Series{
    id: ID!
    title: String!
    description: String!
    genre: [Genre]!
    image: String!
    releaseDate: String
    likedCount: Int
    MustWatchCount: Int
    director: [User]
  }
  
  type YTVideo{
    id: ID!
    title: String!
    description: String!
    genre: [Genre]!
    image: String!
    releaseDate: String
    likedMoviesCount: Int
    MustWatchCount: Int
    channel: String
  }
  
  type Query{
    users: [User]
    user(id: ID!): User

    movies: [Movies]
    movie(id: ID): Movies

    series: [Series]
    webseries(id: ID): Series

    ytVideos: [YTVideo]
    ytVideo(id: ID): YTVideo

  }`

module.exports = typeDefs;