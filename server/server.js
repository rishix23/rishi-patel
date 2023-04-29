const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// setting port
const port = process.env.PORT;

// uri for mongo docker
const uri = "mongodb+srv://rishix23:Absegami16!@cluster1.insdjk8.mongodb.net/?retryWrites=true&w=majority"
console.log(`The URI is ${uri}`)
//database init
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

//routes
const blogsRouter = require("./routes/blogs");

app.use('/blogs', blogsRouter);

app.use("/", (req, res) => {
    res.send("Hello World")
  });
  
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
