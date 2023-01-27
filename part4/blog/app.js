const express = require('express');
const cors = require('cors');
const middleware = require('./utils/middleware');
const config = require('./utils/config');
const mongoConnection = require('./utils/connect.database');

const app = express();
/**
 * Connection to BLOGS Mongo Database
 */
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
app.use(config.PATHLOGIN, require('./routes/login.routes'));
app.use(config.PATHUSERS, require('./routes/users.routes'));
app.use(config.PATHBlOGS, require('./routes/blogs.routes'));


/**
 * Middleware for control of the routes unknown Endpoints
 * and error
 */
app.use(middleware.errorHandler);
app.use(middleware.unknownEndpoint);


module.exports = app;