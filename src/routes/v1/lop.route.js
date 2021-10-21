const express = require('express');
// const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const lopValidation = require('../../validations/lop.validation');
const lopController = require('../../controllers/lop.controller');

const router = express.Router();

router
  .route('/')
  .post(validate(lopValidation.createLop), lopController.createLop)
  .get(validate(lopValidation.getLopes), lopController.getLopes);

router
  .route('/:lopId')
  .get(validate(lopValidation.getLop), lopController.getLop)
  .patch(validate(lopValidation.updateLop), lopController.updateLop)
  .delete(validate(lopValidation.deleteLop), lopController.deleteLop);

module.exports = router;
