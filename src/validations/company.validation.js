const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createCompany = {
  body: Joi.object().keys({
    cid: Joi.string().required(),
    cName: Joi.string().required(),
    address: Joi.string().required(),
   
  }),
};

const getCompanies = {
  query: Joi.object().keys({
    cName: Joi.string(),
    sortBy: Joi.string(),
    limit: Joi.number().integer(),
    page: Joi.number().integer(),
  }),
};

const getCompany = {
  params: Joi.object().keys({
    companyId: Joi.string().custom(objectId),
  }),
};

const updateCompany = {
  params: Joi.object().keys({
    companyId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
        cid: Joi.string(),
        cName: Joi.string(),
        address: Joi.string(),
    })
    .min(1),
};

const deleteCompany = {
  params: Joi.object().keys({
    companyId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createCompany,
  getCompanies,
  getCompany,
  updateCompany,
  deleteCompany,
};
