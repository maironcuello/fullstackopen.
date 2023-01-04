const { request, response } = require("express");
const db = require("../database/db.json");


const getInfo = (req = request, res = response) => {
  res.status(200).send(
    `
    <h3>Phonebook has info for ${db.length} people</h3>
    <h3>${Date()}</h3>
    `
  );
  res.end();
};

module.exports = {
  getInfo,
};
