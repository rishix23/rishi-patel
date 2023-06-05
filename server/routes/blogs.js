const router = require("express").Router();
let Blog = require("../models/blog.model");

// get all blogs
router.route("/").get((req, res) => {
  Blog.find()
    .then((blogs) => res.json(blogs))
    .catch((err) => res.status(400).json("Error: " + err));
});

// create new blog
router.route("/add").post((req, res) => {
  const blogName = req.body.blogName;
  const newBlog = new Blog({ blogName });

  newBlog
    .save()
    .then(() => res.json("Blog added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

// update blog
router.route("/update/:id").put((req, res) => {
  const { id } = req.params;
  const { blogName } = req.body;

  Blog.findById(id)
    .then((blog) => {
      if (!blog) {
        return res.status(404).json("Blog not found");
      }
      blog.blogName = blogName;

      blog
        .save()
        .then(() => res.json("Blog updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

// delete blog
router.route("/delete/:id").delete((req, res) => {
  const { id } = req.params;

  Blog.findByIdAndDelete(id)
    .then((blog) => {
      if (!blog) {
        return res.status(404).json("Blog not found");
      }
      res.json("Blog deleted!");
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
