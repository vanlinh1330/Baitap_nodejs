const mongoose = require('mongoose');
const { toJSON, paginate } = require('./plugins');

const linhSchema = mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
linhSchema.plugin(toJSON);
linhSchema.plugin(paginate);

/**
 * @typedef Linh
 */
const Linh = mongoose.model('Linh', linhSchema);

module.exports = Linh;