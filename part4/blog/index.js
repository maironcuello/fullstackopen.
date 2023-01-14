const http = require('http');
const App = require('./app.js');
const config = require('./utils/config')
const logger = require('./utils/logger');

/**
 * Creating Server instance
 */
const server = http.createServer(App);
server.listen(PORT, () => {logger.info(`Server ${config.NAME_APP} listening on Port ${PORT} status : Online`)});
