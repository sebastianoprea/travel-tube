const Video = require('../models/video');
const ApiKey = require('../.gitignore');

function getVideoLocation(searchParam, next) {
  var request = require("request");
  var url = "https://maps.googleapis.com/maps/api/geocode/json?address=" + searchParam +
            "&key=" + ApiKey.GoogleKey;
  request({
    url: url,
    json: true
  }, function (error, response, body) {
       if (!error && response.statusCode === 200) {
       next(body.results[0]);
     }
  });


}

exports.createVideo = function(req, res, next) {
  getVideoLocation(req.body.location, function(locationData) {
    const video = new Video ({
      title: req.body.title,
      description: req.body.description,
      locationX: locationData.geometry.location.lng,
      locationY: locationData.geometry.location.lat,
      location: locationData.formatted_address,
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
      res.json(videos);
    });
  });
}


function fetchAllVideos(next) {
  Video.find({}, function(err, videos) {
    next(videos);
  });
}

function searchVideos(searchParam, next)  {
  Video.find(
        { $text : { $search : searchParam } },
        { score : { $meta: "textScore" } }
    ).sort({ score : { $meta : 'textScore' } })
    .exec(function(err, videos) {
        next(videos);
    });

}

exports.fetchVideos = function(req, res, next) {
  if (req.query["search"]) {
    searchVideos(req.query["search"], function(videos) {
      res.json(videos);
    });
  }
  else {
    fetchAllVideos(function(videos) {
      res.json(videos);
    });
  }
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
