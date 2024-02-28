const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors package
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json());

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, './index.html')));

// In-memory data store
let data = [];

app.post('/api/data', (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.status(201).send('Data added successfully');
});

// Display Data
app.get('/api/data', (req, res) => {
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});