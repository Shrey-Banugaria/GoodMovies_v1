const mongoose = require("mongoose");
const { Schema } = mongoose;

const Movie = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    genre: [{ type: Schema.Types.ObjectId, ref: 'Genre', required: true }],
    image: { type: String, required: true },
    releaseDate: {  
        type: Date,
        default: Date.now()
    },
    likedCount: { type: Number, min: 0},
    MustWatchCount: { type: Number, min: 0},
    director: { type: Schema.Types.ObjectId, ref: 'User', required: false },
});

const Movies = mongoose.model('Movie', Movie);

module.exports = Movies