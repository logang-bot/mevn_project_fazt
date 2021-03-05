const express = require("express");
const morgan = require("morgan");
const app = express();

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://172.19.0.2/mevn-fazt-database")
  .then((db) => console.log("DB is connected"))
  .catch((err) => console.error(err));

// Settings
app.set("port", process.env.PORT || 8000);
app.use(express.urlencoded({ extended: false }));

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/tasks", require("./src/routes"));

// Static files
app.use(express.static(__dirname + "/src/public"));
// console.log(__dirname);

// Server is listening
app.listen(app.get("port"), () => {
  console.log("server on port", app.get("port"));
});
