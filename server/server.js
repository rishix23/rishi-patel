const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const querystring = require("querystring");
const axios = require("axios");

require("dotenv").config();

const app = express();
app.use(express.json());

// setting port
const port = process.env.PORT;

// database init
const uri = process.env.URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully");
});

// configure cors
const corsOptions = {
  origin: "http://localhost:3000",
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));

// Set Access-Control-Allow-Origin header
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// routes
const exercisesRouter = require("./routes/exercises");
const blogsRouter = require("./routes/blogs");

app.use("/exercises", exercisesRouter);
app.use("/blogs", blogsRouter);

app.get("/auth-url", (req, res) => {
  const CLIENT_ID = "e20a8839be614c8c97534cfc86abe7bb";
  const REDIRECT_URI = "http://localhost:5000/callback";
  const AUTH_URL = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=code&redirect_uri=${REDIRECT_URI}&scope=user-top-read`;
  res.send(AUTH_URL);
});

app.get("/callback", (req, res) => {
  const { code } = req.query;
  console.log(`Code: ${code}`);
  res.json({ code });
});

app.listen(5000, () => {
  console.log(`Server started on port ${port}`);
});
