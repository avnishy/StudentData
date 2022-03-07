const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let studentSchema = new Schema({
  name: {
    type: String
  },
  email: {
    type: String
  },
  phone: {
    type: Number
  },
  rollno: {
    type: Number,
    unique: true
  },
  houseno:{
    type: String
  },
  street: {
    type: String
  },
  city:{
    type: String
  },
  state:{
    type: String
  }
}, {
    collection: 'students'
  })
module.exports = mongoose.model('Student', studentSchema)