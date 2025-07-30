const mongoose = require('mongoose');
const noteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  summary: { type: String },
}, {
  timestamps: true // ✅ this adds createdAt and updatedAt automatically
});

module.exports = mongoose.model('note', noteSchema);