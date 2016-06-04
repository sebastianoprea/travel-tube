const VideoController = require('./controllers/video');

module.exports = function(app) {

  app.post('/videos', VideoController.createVideo);
  app.get('/videos', VideoController.fetchVideos);
  app.get('/videos/:id', VideoController.fetchVideo);
  app.put('/videos/:id', VideoController.editVideo);

  app.use(function(req, res){
    res.send(404);
  });
}
