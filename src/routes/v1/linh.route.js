const express = require('express');
const linhController = require('../../controllers/linh.controller');

const router = express.Router();

router.route('/').post(linhController.createLinh).get(linhController.getLinhs);

module.exports = router;