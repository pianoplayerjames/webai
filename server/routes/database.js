const express = require('express');
const router = express.Router();
const Message = require('../models/test');

router.get('/', async (req, res) => {
  const messages = await Message.find();
  res.send(messages);
});

module.exports = router;