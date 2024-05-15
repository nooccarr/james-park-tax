require('dotenv').config();
const express = require('express');
const path = require('path');
const dbConn = require('./config/dbConn');
const { default: mongoose } = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { isAuthenticated } = require('./middlewares/authMiddleware');
const { PORT = 4000 } = process.env;

dbConn();

const app = express();

app.use(
  cors({
    origin: [
      'http://localhost:3000',
      'http://localhost:4000',
      'https://www.jamesparktax.com',
    ],
    credentials: true,
    optionsSuccessStatus: 200,
  })
);
// Middleware that looks at requests where the Content-Type header matches the type option, and converts the body into a JavaScript object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Serve static files from the React app
app.use(
  '/',
  express.static(path.join(__dirname, '..', 'dist'), { maxAge: '0' })
);

// app.get(/^(?!\/api).\*/, (_, res) => {
//   res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
// });

// Serve requests from the router
app.use('/', require(path.join(__dirname, 'routes', 'authRoutes')));
app.use(
  '/users',
  isAuthenticated,
  require(path.join(__dirname, 'routes', 'userRoutes'))
);
app.use('/blogs', require(path.join(__dirname, 'routes', 'blogRoutes')));

// Handle client routing, return all requests to the app
app.all('*', (req, res) => {
  if (req.accepts('html')) {
    res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'), (err) => {
      if (err) console.log(err);
    });
  } else if (req.accepts('json')) {
    res.json({ message: '404 Not Found' });
  } else {
    res.type('txt').send('404 Not Found');
  }
});

mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});

mongoose.connection.on('error', (error) => {
  console.log('Error connecting to MongoDB', error);
});

module.exports = app;
