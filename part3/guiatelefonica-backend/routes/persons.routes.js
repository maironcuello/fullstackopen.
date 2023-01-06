const { Router } = require("express");
const morgan = require("morgan");
const {
  getAllPersons,
  getPerson,
  createPerson,
  deletePerson,
  updatePerson,
} = require("../controllers/persons.controllers");

/**
 * Router
 */
const router = Router();

/**
 * Creating morgan token from JSON object
 */
morgan.token("body", (request) => request.method === 'POST'? JSON.stringify(request.body): '');

/**
 * Routes for the server
 */
router.get("/", getAllPersons);
router.get("/:id", getPerson);
router.post("/", createPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

module.exports = router;