const knex = require("knex");

const knexfile = require("../knexfile");
const enviornment = process.env.DB || "development";

module.exports = knex(knexfile[enviornment]);
