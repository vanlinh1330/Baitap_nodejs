const httpStatus = require('http-status');
const { People } = require('../models');
const ApiError = require('../utils/ApiError');

const createPeople = async (peopleBody) => {
  return await People.create(peopleBody);
};
const queryPeoples = async (filter, options) => {
  const peoples = await People.paginate(filter, options);
  return peoples;
};

const getPeopleById = async (id) => {
  return People.findById(id);
};


const updatePeopleById = async (peopleId, updateBody) => {
  const people = await getPeopleById(peopleId);
  if (!people) {
    throw new ApiError(httpStatus.NOT_FOUND, 'People not found');
  }
  Object.assign(people, updateBody);
  await people.save();
  return people;
};

const deletePeopleById = async (peopleId) => {
  const people = await getPeopleById(peopleId);
  if (!people) {
    throw new ApiError(httpStatus.NOT_FOUND, 'People not found');
  }
  await people.remove();
  return people;
};

module.exports = {
  createPeople,
  queryPeoples,
  getPeopleById,
  updatePeopleById,
  deletePeopleById,
};
