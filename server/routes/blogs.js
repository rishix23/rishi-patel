const router = require('express').Router();
let Blog = require('../models/blog.model');

router.route('/').get((req, res) => {
  Blog.find()
  .then(blogs => res.json(blogs))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const blogName = req.body.blogName;

  const newBlog = new Blog({blogName});

  newBlog.save()
    .then(() => res.json('Blog added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router; 