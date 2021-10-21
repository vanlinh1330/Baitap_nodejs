const mongoose = require("mongoose");
// const validator = require("validator");
const { toJSON, paginate } = require('./plugins');
const lopSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    numberStudent:{
        type: Number,
        required: true,
    }
})
lopSchema.plugin(toJSON);
lopSchema.plugin(paginate);
lopSchema.statics.isName = async function (name, excludeStudentId) {
    const _lop = await this.findOne({ name, _id: { $ne: excludeStudentId } });
    return !!_lop;
  };
const lop = mongoose.model("lops", lopSchema);
  
module.exports = lop;
