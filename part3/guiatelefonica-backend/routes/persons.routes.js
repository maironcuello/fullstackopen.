const { Router } = require("express");
const { getAllPersons, getPerson, deletePerson } = require("../controllers/persons.controllers");

/**
 * Router
 */
const router = Router();

/**
 * Routes for the server
 */
router.get("/", getAllPersons);
router.get("/:id", getPerson);
router.delete("/:id", deletePerson);

module.exports = router;