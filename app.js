//step1a/b
const express = require('express');
const app = express()

//step 2a-b
const logger = require('morgan');
app.use (logger('dev'));

