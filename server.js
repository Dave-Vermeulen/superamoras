const express = require('express');
const app = express();
const db = require('./db');
const admin = require('./api/admin')(db);
const comments = require('./api/comments');

// API endpoints
app.use('/api/comments', comments);

app.get('/api/admin/stats', admin.getStats);

// Serve static files
app.use(express.static('public'));

// Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});