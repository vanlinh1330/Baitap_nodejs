const httpStatus = require('http-status');
const pick = require('../utils/pick');
const catchAsync = require('../utils/catchAsync');
const { linhService } = require('../services');

const createLinh = catchAsync(async (req, res) => {
  const linh = await linhService.createLinh(req.body);
  res.status(httpStatus.CREATED).send(linh);
});

const getLinhs = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name', 'role']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await linhService.queryLinhs(filter, options);
  res.send(result);
});


module.exports = {
  createLinh,
  getLinhs,
};
