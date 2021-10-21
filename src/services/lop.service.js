const httpStatus = require('http-status');
const { Lop } = require('../models');
const ApiError = require('../utils/ApiError');


const createLop = async (lopBody) => {
  if (await Lop.isName(lopBody.name)) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Name already taken');
  }
  return Lop.create(lopBody);
};

const queryLopes = async (filter, options) => {
  const lops = await Lop.paginate(filter, options);
  return lops;
};

const getLopById = async (id) => {
  return Lop.findById(id);
};

const updateLopById = async (lopId, updateBody) => {
  const _lop = await getLopById(lopId);
  if (!_lop) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lop not found');
  }
  if (updateBody.email && (await Lop.isEmailTaken(updateBody.email, lopId))) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  Object.assign(_lop, updateBody);
  await _lop.save();
  return _lop;
};


const deleteLopById = async (lopId) => {
  const _lop = await getLopById(lopId);
  if (!_lop) {
    throw new ApiError(httpStatus.NOT_FOUND, 'Lop not found');
  }
  await _lop.remove();
  return _lop;
};

module.exports = {
  createLop,
  queryLopes,
  getLopById,
  updateLopById,
  deleteLopById,
};
