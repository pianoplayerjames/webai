const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'This data is being sent from express using routes!' });
});

module.exports = router;