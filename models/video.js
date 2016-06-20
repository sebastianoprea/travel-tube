const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = new Schema({
  // video description
  created: {type: Date },
  modified: {type: Date },
  title: {type: String},
  description: {type: String },
  locationX: {type: Number},
  locationY: {type: Number},
  location: {type: String},
  tags: {type: Array },
  videoUrl: {type: String},
  thumbnail: {type: String}

});
videoSchema.index({ title: 'text', description: 'text', tags: 'text'}, { name: "best_match_index", weights: { title: 30, description:2, tags:1} });

const ModelClass = mongoose.model('videos', videoSchema);
module.exports = ModelClass;
