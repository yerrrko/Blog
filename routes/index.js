// routes/index.js

const express = require('express');
const router = express.Router();

// Placeholder data for blog posts
let blogPosts = [
  { title: 'First Blog Post', content: 'This is the content of the first blog post.' },
  { title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
  // Add more blog posts as needed
];

// Route for the home page
router.get('/', (req, res) => {
  res.render('home', { title: 'Home', posts: blogPosts });
});

// Route for submitting a new blog post
router.post('/addPost', (req, res) => {
  const newPost = {
    title: req.body.title,
    content: req.body.content
  };
  // Add the new post to the list of blog posts (or save it in a database)
  blogPosts.push(newPost);
  res.redirect('/');
});

module.exports = router;
