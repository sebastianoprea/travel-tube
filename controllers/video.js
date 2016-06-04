const Video = require('../models/video');

exports.createVideo = function(req, res, next) {

  const title = req.body.title;
  const description = req.body.description;
  const locationX = req.body.locationX;
  const locationY = req.body.locationY;
  const tags = req.body.tags;
  const videoUrl = req.body.videoUrl;
  const thumbnails = req.body.thumbnails;
  const created = new Date();
  const modified = new Date();

  const video = new Video({
    title: title,
    description: description,
    locationX: locationX,
    locationY: locationY,
    tags: tags,
    created: created,
    modified: modified,
    thumbnails: thumbnails,
    videoUrl: videoUrl
  });

  video.save(function(err) {
    if (err) {
      return next(err);
    }
    console.log("HERE");
    res.json({ video: (video) });
  });
}
exports.fetchVideos = function(req, res, next) {
  Video.find({}, function(err, videos) {
    res.json({ videos: (videos) });
  });
}
exports.fetchVideo = function(req, res, next) {
  Video.find({'_id': req.params.id}, function(err, video) {
    res.json({ video: (video) });
  });
}
exports.editVideo =  function(req, res, next) {
  Video.findOne({'_id': req.params.id}, function(err, video) {

    if (req.body.title)
      video.title = req.body.title;
    if (req.body.description)
      video.description = req.body.description;
    if (req.body.locationX)
      video.locationX = req.body.locationX;
    if (req.body.locationY)
      video.locationY = req.body.locationY;
    if (req.body.tags)
      video.tags = req.body.tags;;

    video.modified = new Date();
    video.save(function(err) {
      if (err) {
        return next(err);
      }
      res.json({ video: (video) });
    });

 });
}
