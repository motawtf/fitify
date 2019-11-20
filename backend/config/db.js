// Mongoose Configuration
const mongoose = require('mongoose');
const { MONGO_URI } = require('./keys');

mongoose.connect(MONGO_URI, { useNewUrlParser: true })
  .then(() => console.log('[INFO] MongoDB Connected'))
  .catch(err => console.log(err));