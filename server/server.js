const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// setting port
// const port = process.env.PORT // || 5000;
const port = process.env.PORT

// uri for mongo docker
const uri = process.env.URI

// database init
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// routes
// const blogsRouter = require("./routes/blogs");

// app.use('/api/blogs', blogsRouter);
// if (process.env.NODE_ENV === 'production') {
//   app.use('/api/blogs', blogsRouter);
// } else {
//   app.use("/blogs", blogsRouter);
// }

app.use("/", (req, res) => {
    res("Hello World")
  });
  
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
