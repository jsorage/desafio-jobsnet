const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

  fullname: {
    type: String,
    required: true
  },
  
  district: {
    type: String,
    required: true
  },

  city: {
    type: String,
    required: true
  },
  
  postal_code: {
    type: String,
    required: true
  },
  
  address: {
    type: String,
    required: true
  },

  celphone: {
    type: String,
    required: true
  },

  doc_ssn: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },

  email: {
    type: String,
    required: true
  },

  profession: {
    type: String,
    required: true
  },
  
  /*dob: {
    type: Date,
    required: true
  },*/

  gender: String,
  doc_id: String, 
  res_car: String,
  drive_licence: String,
  phone_nr: String,
  marital_status: String,
});

module.exports = mongoose.model("User", UserSchema);
