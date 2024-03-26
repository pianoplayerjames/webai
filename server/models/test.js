const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  message: { type: String, required: true }
}, { collection: 'messages' });

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;