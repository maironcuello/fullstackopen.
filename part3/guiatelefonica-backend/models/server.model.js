/**
 * Our Method connections  
 */
require('./../server/configutations/config.port.server');
const { dbConection } = require('./../helpers/database/connect.database')

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
  }

  /**
   * Database connection
   */
  async dbConection(){
    await dbConection();
  }

  /**
   * Middleware
   */
  middaleware() {
    this.app.use(morgan(':method :url :status  :res[content-length] :response-time ms :body'));
    this.app.use(cors());
    this.app.use(express.json());
    // Public directory
    this.app.use(express.static('build'));
  }

  /**
   * Routes
   */
  routes() {
    this.app.use(this.personsPath, require("../routes/persons.routes"));
    this.app.use(this.infoPath, require("../routes/info.routes"));
  }

  /**
   * Server
   */

  listen() {
    this.app.listen(this.port),
      console.log(`Server running on local port ${this.port}`);
  }
}

module.exports = Backendserver;