const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/events', (req, res) => {
  fs.readFile('events.json', 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading events.json:', err);
      return res.status(500).json({ error: 'Failed to load events' });
    }
    res.json(JSON.parse(data));
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
