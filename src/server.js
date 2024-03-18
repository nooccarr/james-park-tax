const express = require('express');
const path = require('path');
const dbConn = require('./lib/config/dbConn');
const { default: mongoose } = require('mongoose');
const { createServer } = require('vite');
const { ViteNodeServer } = require('vite-node/server');
const { installSourcemapsSupport } = require('vite-node/source-map');
const { PORT = 4000 } = process.env;

const app = express();

// Middleware that looks at requests where the Content-Type header matches the type option, and converts the body into a JavaScript object
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app
app.use('/', express.static(path.join(__dirname, '..', 'dist')));

// Serve requests from the router
app.use('/users', require(path.join(__dirname, 'lib', 'routes', 'userRoutes')));
app.use('/blogs', require(path.join(__dirname, 'lib', 'routes', 'blogRoutes')));

// Handle client routing, return all requests to the app
app.get('*', (_, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'), (err) => {
    if (err) console.log(err);
  });
});

dbConn();

mongoose.connection.once('open', async () => {
  console.log('Connected to MongoDB');

  const server = app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

  const viteServer = await createServer({
    optimizeDeps: {
      disabled: true,
    },
  });

  await viteServer.pluginContainer.buildStart({});

  const node = new ViteNodeServer(viteServer);

  installSourcemapsSupport({
    getSourceMap: (source) => node.getSourceMap(source),
  });

  await viteServer.close();
});

mongoose.connection.on('error', (error) => {
  console.error('Error connecting to MongoDB', error);
});
