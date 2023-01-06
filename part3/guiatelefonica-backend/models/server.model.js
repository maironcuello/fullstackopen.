require('./../server/configutations/config.port.server');
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
  }

  /**
   * Middleware
   */
  middaleware() {
    this.app.use(morgan(':method :url :status  :res[content-length] :response-time ms :body'));
    this.app.use(cors());
    this.app.use(express.json());
    // Public directory
    this.app.use(express.static('public'));
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