// Todo: Create Artist Model
const mongoose = require('mongoose');
const { Schema } = mongoose;
const AlbumSchema = require('./album');

const ArtistSchema = new Schema({

  name: String,
  age: Number,
  yearsActive: Number,
  image: String,
  genre: String,
  website: String,
  netWorth: Number,
  labelName: String,
  retired: Boolean,
  albums: [AlbumSchema]
});

const Artist = mongoose.Schema('artist', ArtistSchema);

module.exports = Artist;