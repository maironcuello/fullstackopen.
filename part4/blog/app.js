const express = require('express');
const app = express();
const cors = require('cors');
const middleware = require('./utils/middleware');
const config = require('./utils/config');
const mongoConnection = require('./utils/connect.database');


mongoConnection();    

/**
 * Middleware
 */
app.use(cors());
app.use(express.json());
app.use(middleware.requestLogger);

/**
 * Middlware routes Blogs 
*/
app.use(config.PATHBlOGS, require('./routes/blogs.routes'));

/**
 * Middleware for control of the routes unknown Endpoints
 * and error
 */
app.use(middleware.unknownEndpoint);
app.use(middleware.errorHandler);


module.exports = app;