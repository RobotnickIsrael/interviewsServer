const { Router } = require('express');
const imagesController = require('./images.ctrl');

const router = Router();
router.get('/api/images', imagesController.getImages );

module.exports = router;
