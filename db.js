// Database connection
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('database.sqlite3');

// Get comments
const getComments = () => {
    return new Promise((resolve, reject) => {
        db.all('SELECT * FROM comments', (err, rows) => {
            if (err) reject(err);
            resolve(rows);
        });
    });
};

// Add comment
const addComment = (comment) => {
    return new Promise((resolve, reject) => {
        db.run('INSERT INTO comments (author, text) VALUES (?, ?)', comment.author, comment.text, (err) => {
            if (err) reject(err);
            resolve(comment);
        });
    });
};

// Get admin stats
const getAdminStats = () => {
    return new Promise((resolve, reject) => {
        db.get('SELECT COUNT(*) as articles FROM articles', (err, row) => {
            if (err) reject(err);
            const articles = row.articles;
            db.get('SELECT COUNT(*) as comments FROM comments', (err, row) => {
                if (err) reject(err);
                const comments = row.comments;
                db.get('SELECT COUNT(*) as users FROM users', (err, row) => {
                    if (err) reject(err);
                    const users = row.users;
                    resolve({ articles, comments, users });
                });
            });
        });
    });
};

module.exports = { getComments, addComment, getAdminStats };