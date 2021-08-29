const express = require('express');

const routes = require('./routes');
const Database = require('./database');

const { options } = require('./swagger');
const expressJSDocSwagger = require('express-jsdoc-swagger');

class App {
  constructor() {
    this.server = express();
    this.middlewares();
    this.routes();
    this.database();
    this.swagger();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(express.urlencoded({ extended: true }));
  }

  routes() {
    this.server.use(routes)
  }

  database() {
    this.db = new Database();
    this.db.connect();
  }

  swagger() {
    expressJSDocSwagger(this.server)(options);
  }

}

module.exports = new App().server;
