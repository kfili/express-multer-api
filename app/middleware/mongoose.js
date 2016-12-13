'use strict';

const mongoose = require('mongoose');
const uri = process.env.MONGODB_URI || 'mongodb://localhost/express-mutler-api';
mongoose.Promise = global.Promise;
mongoose.connect(uri);

module.exports = mongoose;
