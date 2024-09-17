const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    rollNO : { type: Number},
    name: { type: String},
    fatherName:{ type: String},
    adharCardNumber:{ type:String},
    moblieNo:{ type:String}


})
module.exports = mongoose.model('student',StudentSchema)