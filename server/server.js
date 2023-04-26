const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// setting port
const port = process.env.PORT;

// uri for Netifly
const uri = process.env.URI

// uri for docker
//const uri = process.env.MONGO_URI;

// database init
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// routes
const exercisesRouter = require("./routes/exercises");
const blogsRouter = require("./routes/blogs");

app.use("/exercises", exercisesRouter);
app.use("/blogs", blogsRouter);

app.get("/code", (req, res) => {


    //res.redirect("http://localhost:3000/about")
  });
  
app.listen(5000, () => {
  console.log(`Server started on port ${5000}`);
});
