const app = require('./express.js');

const PORT = 4000;
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})