// server.js
const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the public directory
app.use(express.static('public'));

// Endpoint to serve the JSON data
const data = require('./data.json');
app.get('/data', (req, res) => {
  res.json(data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
