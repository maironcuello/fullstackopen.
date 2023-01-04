const { request, response } = require("express");
const db = require("../database/db.json");

const getAllPersons = (req = request, res = response) => {
    res.status(200).json(db)
};

module.exports = {
  getAllPersons,
};