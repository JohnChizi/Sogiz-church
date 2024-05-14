const express = require('express');
const cors = require('cors');
const routes = require('./Router/router')
// const globalErrorHandler = require('./globalError/errorMiddleware');
const app = express();


app.use(express.json());

app.use(cors());

app.use(express.urlencoded({extended: true}));


app.use('/v1', routes);

// app.use(globalErrorHandler);

module.exports = app;