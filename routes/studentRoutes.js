const express = require("express");
const app = express.Router();

const {
  getAllStudents,
  getOneStudent,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../controllers/studentControllers");

app.route("/").get(getAllStudents).post(createStudent);

app.route("/:name").get(getOneStudent).put(updateStudent).delete(deleteStudent);

module.exports = app;
