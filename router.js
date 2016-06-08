const VideoRouter = require('./routers/video');

module.exports = function(app) {
  app.use('/videos', VideoRouter);
  app.use(function(req, res){
    res.send(404);
  });
}
