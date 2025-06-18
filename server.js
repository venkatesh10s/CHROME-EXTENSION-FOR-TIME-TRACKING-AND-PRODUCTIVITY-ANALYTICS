
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const usageRoutes = require('./routes/usageRoutes');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/usage', usageRoutes);

mongoose.connect('mongodb://127.0.0.1:27017/productivity', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
  app.listen(3501, () => console.log('Server is running on http://localhost:3501'));
}).catch(err => console.error(err));
