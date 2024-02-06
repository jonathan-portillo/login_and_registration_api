exports.up = function (knex) {
  return knex.schema.createTable("users", (tbl) => {
    tbl.increments();
    tbl.string("username", 128).notNullable().unique().index();
    tbl.string("password", 128).notNullable().index();
    tbl.string("email", 128).notNullable().unique();
    tbl.string("full_name", 128);
    tbl.string("DOB", 128).notNullable();
  });
};

exports.down = function (knex) {};
