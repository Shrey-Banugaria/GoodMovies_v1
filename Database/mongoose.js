const mongoose = require('mongoose');

function mongooseDb() {
    mongoose.connect('mongodb://localhost:27017/mre', {})
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));
}

module.exports = { mongooseDb }

