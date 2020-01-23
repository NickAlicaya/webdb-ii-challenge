const db = require("../data/db-config.js");

module.exports = {
  get,
  getById,
  getByVIN,
  getByMake,
  getByModel,
  insert
  // update,
  // remove
};

function get() {
  return db("Cars");
}

function getById(id) {
  return db("Cars")
    .where({ id })
    .first();
}

function getByVIN(VIN) {
  return db("Cars")
    .where({ VIN })
    .first();
}

function getByMake(make) {
  return db("Cars").where({ make });
}

function getByModel(model) {
  return db("Cars").where({ model });
}

function insert(car) {
  return db("Cars")
    .insert(car)
    .then(([id]) => getById(id));
}