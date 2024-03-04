const express = require('express');
const path = require('path');

const { PORT = 4000 } = process.env;

const app = express();

// Middleware that looks at requests where the Content-Type header matches the type option, and converts the body into a JavaScript object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use('/', express.static(path.join(__dirname, '..', 'dist')));

// Serve requests from the router
app.use('/users', require(path.join(__dirname, 'lib', 'routes', 'userRoutes')));
app.use('/posts', require(path.join(__dirname, 'lib', 'routes', 'postRoutes')));

// Handle client routing, return all requests to the app
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'), (err) => {
    if (err) console.log(err);
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
