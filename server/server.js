const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Import routes
const indexRoutes = require('./routes/index');
const databaseRoutes = require('./routes/database');

mongoose.connect('mongodb://localhost:27017/mevn-test')
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));

app.use('/', indexRoutes);
app.use('/database', databaseRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
