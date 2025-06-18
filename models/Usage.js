
const mongoose = require('mongoose');

const usageSchema = new mongoose.Schema({
  domain: String,
  timeSpent: Number
});

module.exports = mongoose.model('Usage', usageSchema);
