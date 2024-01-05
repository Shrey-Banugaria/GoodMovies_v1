const mongoose = require("mongoose");
const { Schema } = mongoose;

const Genre = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    metadata: { type: String, required: false },
});

const Generes = mongoose.model('Genre', Genre);

module.exports = Generes