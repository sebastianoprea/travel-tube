const VideoController = require('./controllers/video');

module.exports = function(app) {

  app.post('/api/videos', VideoController.createVideo);
  app.get('/api/videos', VideoController.fetchVideos);
  app.get('/api/videos/:id', VideoController.fetchVideo);
  app.put('/api/videos/:id', VideoController.editVideo);

  app.use(function(req, res){
    res.send(404);
  });
}
