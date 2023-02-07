const express = require("express");
require("dotenv").config();

const cors = require("cors");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 8080;

app.use(cors());

const connectDB = require("./dbinit.js");
connectDB();

app.get("/", (req, res) => {
  res.send("A present for Reagan");
});

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
});

const student = require("./routes/studentRoutes");
app.use("/students", student);
