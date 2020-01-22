
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
  .truncate()
  .then(function() {
    // Inserts seed entries
    return knex("cars").insert([
      {
        VIN: "3209UWEFDAFA",
        Make: "Toyota",
        Model: "sienna",
        Mileage: "13005"
      },
      {
        VIN: "43Q43GFSHGFS",
        Make: " Nissan",
        Model: "Corola",
        Mileage: "2050"
      },
      {
        VIN: "GFHGSHJH2KNH9",
        Make: "GM",
        Model: "X1000",
        Mileage: "25093"
      }
    ]);
  });
};
