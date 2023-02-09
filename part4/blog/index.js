const http = require('http');
const app = require('./app.js');
const config = require('./utils/config')
const logger = require('./utils/logger');

/**
 * Creating Server instance
 */
const server = http.createServer(app);
server.listen(config.PORT, () => {logger.info(`Server ${config.NAME_APP} listening on Port ${config.PORT} status : Online`)});

module.exports = server;