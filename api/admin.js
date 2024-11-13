// Admin API endpoint
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/stats', (req, res) => {
    db.getAdminStats().then(stats => res.json(stats));
});

module.exports = router;