const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
      
    name: {
        type: String,
        required: true,
        trim: true // Remove leading/trailing whitespace
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true // Enforce lowercase email
    },
    password: {
        type: String,
        required: true,
        minlength: 6 // Enforce minimum password length
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    role: {
        type: String,
        required: true,
        enum: ['User', 'Director', 'Actor', 'Artist']
    },
    likedMovies: [
        { type: Schema.Types.ObjectId, ref: 'Movies' },
    ],
    likedMoviesCount: { type: Number, min: 0},
    // likedWebSeries: [
    //     { type: Schema.Types.ObjectId, ref: 'Series' },
    // ],
    // likedWebSeriesCount: { type: Number, min: 0},
    // likedYVideos: [
    //     { type: Schema.Types.ObjectId, ref: 'YTVideo' },
    // ],
    // likedMoviesCount:  { type: Number, min: 0},
    mustWatchMovies: [
        { type: Schema.Types.ObjectId, ref: 'Movies' },
    ],
    // mustWatchWebSeries: [
    //     { type: Schema.Types.ObjectId, ref: 'Series' },
    // ],
    // mustWatchYTVideos: [
    //     { type: Schema.Types.ObjectId, ref: 'YTVideo' },
    // ],
});   

const User = mongoose.model('User', userSchema);

module.exports = new User();