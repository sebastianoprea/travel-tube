const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  // video description
  created: {type: Date },
  modified: {type: Date },
  title: {type: String},
  description: {type: String },
  locationX: {type: String},
  locationY: {type: String},
  tags: {type: Array },
  videoUrl: {type: String},
  thumbnail: {type: String}

});

const ModelClass = mongoose.model('videos', videoSchema);
module.exports = ModelClass;
