const { Linh } = require('../models');
const ApiError = require('../utils/ApiError');

/**
 * Create a linh
 * @param {Object} linhBody
 * @returns {Promise<Linh>}
 */
const createLinh = async (linhBody) => {
  return Linh.create(linhBody);
};

/**
 * Query for linhs
 * @param {Object} filter - Mongo filter
 * @param {Object} options - Query options
 * @param {string} [options.sortBy] - Sort option in the format: sortField:(desc|asc)
 * @param {number} [options.limit] - Maximum number of results per page (default = 10)
 * @param {number} [options.page] - Current page (default = 1)
 * @returns {Promise<QueryResult>}
 */
const queryLinhs = async (filter, options) => {
  const linhs = await Linh.paginate(filter, options);
  return linhs;
};

module.exports = {
  createLinh,
  queryLinhs,
};