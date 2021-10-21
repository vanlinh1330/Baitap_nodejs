const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createLinh = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    role: Joi.string().required().valid('linh', 'admin'),
  }),
};

const getLinhs = {
  query: Joi.object().keys({
    name: Joi.string(),
    role: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getLinh = {
  params: Joi.object().keys({
    linhId: Joi.string().custom(objectId),
  }),
};

const updateLinh = {
  params: Joi.object().keys({
    linhId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string(),
    })
    .min(1),
};

const deleteLinh = {
  params: Joi.object().keys({
    linhId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createLinh,
  getLinhs,
  getLinh,
  updateLinh,
  deleteLinh,
};
