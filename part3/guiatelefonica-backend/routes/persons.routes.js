const { Router } = require("express");
const { getAllPersons, getPerson } = require("../controllers/persons.controllers");

/**
 * Router
 */
const router = Router();

/**
 * Routes for the server
 */
router.get("/", getAllPersons);
router.get("/:id", getPerson);

module.exports = router;