
exports.up = function(knex) {
  return knex.schema.createTable("cars", tbl => {
      tbl.increments();
      tbl.string("VIN", 50).unique().notNullable();
      tbl.string("make", 50).notNullable();
      tbl.string("model", 50).notNullable();
      tbl.integer("mileage", 7).notNullable();
      tbl.string("transmission_type", 20);
      tbl.string("title_status", 20);
      tbl.timestamps(true,true);
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("cars")
};
