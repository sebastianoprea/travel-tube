const VideoController = require('../controllers/video');
var express = require('express');
var router = express.Router();

router.post('/', VideoController.createVideo);
router.get('/', VideoController.fetchVideos);
router.get('/:id', VideoController.fetchVideo);
router.put('/:id', VideoController.editVideo);

module.exports = router;
