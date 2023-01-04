const { Router } = require("express");
const { getAllPersons } = require("../controllers/persons.controllers");

/**
 * Router
 */
const router = Router();

/**
 * Routes for the server
 */
router.get("/", getAllPersons);

module.exports = router;