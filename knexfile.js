module.exports = {
  development: {
     
      client: "sqlite3", // the db driver
      
      connection: {
          filename: "./data/car-dealer.db3",
      },
      useNullAsDefault: true, // ONLY needed for SQLite
      migrations: {
          directory: "./data/migrations",
      },
      seeds: {
        directory: "./data/seeds",
    },
  },
  staging: {
      client: "postgresql",
      connection: {
          database: "my_db",
          user: "username",
          password: "password",
      },
      pool: {
          min: 2,
          max: 10,
      },
      migrations: {
          tableName: "knex_migrations",
      },
  },
  production: {
      client: "postgresql",
      connection: {
          database: "my_db",
          user: "username",
          password: "password",
      },
      pool: {
          min: 2,
          max: 10,
      },
      migrations: {
          tableName: "knex_migrations",
      },
  },
};
// npm i -g knex or just use npx knex for commands
// run: knex init
// copy from fruits router the configuration object
// to knexfile.js
// add the migrations key to knexfile.js
// run: knex migrate:make songs_table
//