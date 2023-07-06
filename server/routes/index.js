const express = require('express');
const router = express.Router();
const webRobotRouter = require('./webRobotRouter');

router.use('/', webRobotRouter);

module.exports = router;
