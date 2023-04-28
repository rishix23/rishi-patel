const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// setting port
const port = process.env.PORT // || 5000;

// uri for mongo docker
const uri = process.env.URI

// database init
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// routes
const exercisesRouter = require("./routes/exercises");
const blogsRouter = require("./routes/blogs");

app.use('/api/exercises', exercisesRouter);
app.use('/api/blogs', blogsRouter);
// if (process.env.NODE_ENV === 'production') {
//   app.use('/api/exercises', exercisesRouter);
//   app.use('/api/blogs', blogsRouter);
// } else {
//   app.use("/exercises", exercisesRouter);
//   app.use("/blogs", blogsRouter);
// }

// app.get("/code", (req, res) => {
//     //res.redirect("http://localhost:3000/about")
//   });
  
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
