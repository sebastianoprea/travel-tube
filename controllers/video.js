const Video = require('../models/video');
exports.createVideo = function(req, res, next) {
  const video = new Video ({
    title: req.body.title,
    description: req.body.description,
    locationX: req.body.locationX,
    locationY: req.body.locationY,
    tags: req.body.tags,
    created: new Date(),
    modified: new Date(),
    thumbnail: req.body.thumbnail,
    videoUrl: req.body.videoUrl
  });
  video.save(function(err) {
    if (err) {
      return next(err);
    }
    res.json({ video: (video) });
  });
}
exports.fetchVideos = function(req, res, next) {
  Video.find({}, function(err, videos) {
    res.json((videos));
  });
}
exports.fetchVideo = function(req, res, next) {
  Video.find({'_id': req.params.id}, function(err, video) {
    res.json({ video: (video) });
  });
}
exports.editVideo =  function(req, res, next) {
  Video.findOne({'_id': req.params.id}, function(err, video) {
    for (var attribute in req.body) {
      video[attribute] = req.body[attribute];
    }
    video.modified = new Date();
    video.save(function(err) {
      if (err) {
        return next(err);
      }
      res.json({ video: (video) });
    });
 });
}
