/**
 * Our Method connections  
 */
require('../helpers/utils/config.port.server');
const  logger  = require('../helpers/utils/logger');
const { dbConection } = require('./../helpers/database/connect.database')
const middleware = require('../helpers/utils/middleware');

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

class Backendserver {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.personsPath = "/api/persons";
    this.infoPath = "/info";
    this.middaleware();
    this.routes();
    this.dbConection()
    // this.middleware();
  }

  /**
   * Database connection
   */
  async dbConection() {
    await dbConection();
  }

  /**
   * Middleware
   */
  middaleware() {
    // this.app.use(morgan(':method :url :status  :res[content-length] :response-time ms :body'));
    this.app.use(cors());
    this.app.use(express.json());
    
    /**
     *Public directory 
     */
    this.app.use(express.static('build'));
    this.app.use(middleware.requestLogger)
  }

  /**
   * Middleware Routes
   */
  routes() {
    this.app.use(this.personsPath, require("../routes/persons.routes"));
    this.app.use(this.infoPath, require("../routes/info.routes"));
    /**
     * Return in console info about route petitions
     */
    this.app.use(middleware.unknownEndpoint)
    this.app.use(middleware.errorHandler)
  }


  /**
   * Server
   */

  listen() {
    this.app.listen(this.port),
      logger.info(`Server connection is established in PORT ${this.port} : Online`);
  }
}

module.exports = Backendserver;