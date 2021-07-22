const db = require("../db");

const find = async () => {
  return db.promise().query("select * from projects");
};

const create = async ({ title, category, description, stack, year }) => {
  return db
    .promise()
    .query(
      "INSERT INTO projects (title, category, description, stack, year) VALUES (?, ?, ?, ?, ?)",
      [title, category, description, stack, year]
    );
};

const findByCategory = async (email) => {
  return db.promise().query("SELECT * FROM projects WHERE category = ?", [category]);
};

const delete_ = (id) => {
    return db.promise().query("DELETE FROM projects WHERE id=?", [id]);
  };

module.exports = { find, create, findByCategory, delete_ };