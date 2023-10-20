const express = require('express');
const path = require('path');

const app = express();

// Middleware that looks at requests where the Content-Type header matches the type option, and converts the body into a JavaScript object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));

// Handle client routing, return all requests to the app
app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"), err => {
      if (err) {
          console.log(err);
      }
  });
});

const { PORT = 4000 } = process.env;

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})