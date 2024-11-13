const express = require('express');
const app = express();
const db = require('./db');

// API endpoints
app.get('/api/comments', require('./api/comments'));
app.post('/api/comments', require('./api/comments'));
app.get('/api/admin/stats', require('./api/admin'));

// Serve static files
app.use(express.static('public'));

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});