const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', express.static(path.join(__dirname, '..', 'client', 'dist')));

app.get("/*", (_, res) => {
  res.sendFile(path.join(__dirname, "..", "client", "dist", "index.html"), err => {
      if (err) {
          console.log(err);
      }
  });
});

const PORT = 4000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})