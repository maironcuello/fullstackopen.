const { Router } = require("express");
const { getInfo } = require("../controllers/info.controllers");

/**
 * Router
 */
const router = Router();

/**
 * Routes for the server
 */
router.get("/", getInfo);

module.exports = router;