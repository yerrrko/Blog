const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let blogPosts = [];

app.get('/', (req, res) => {
  res.render('blog-list', { blogPosts });
});

app.get('/add-blog', (req, res) => {
  res.render('add-blog');
});

app.post('/add-blog', (req, res) => {
  const { title, content } = req.body;
  const newBlog = {
    id: Date.now(),
    title,
    content,
  };
  blogPosts.push(newBlog);
  res.redirect('/');
});
app.get('/blog/:id', function(req, res) {
    const Id = parseInt(req.params.id);
    const blog = blogPosts.find((b) => b.id === Id);
    res.render('blog', { blog });
  });
  

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

