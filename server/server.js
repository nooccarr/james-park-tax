const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get("/message", (_, res) => res.send("Hello from express!"));
app.get("/", (_, res) => res.send("Hello world!"));

const PORT = 4000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})