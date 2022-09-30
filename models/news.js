// import mongoose from 'mongoose';

const mongoose = require('mongoose');
const { Schema } = mongoose;


const newsSchema = new Schema({
  title:  { type: String, required: [true, 'Title is required ...'] }, 
  description: { type: String, required: [true, 'Description is required...']},
  created: { type: Date, default: Date.now },
 
  }
);

module.exports = mongoose.model('News', newsSchema);