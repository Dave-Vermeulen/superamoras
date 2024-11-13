// Comment API endpoint
const express = require('express');
const router = express.Router();
const db = require('../db');

router.get('/', (req, res) => {
    db.getComments().then(comments => res.json(comments));
});

router.post('/', (req, res) => {
    const comment = req.body;
    db.addComment(comment).then(comment => res.json(comment));
});

module.exports = router;