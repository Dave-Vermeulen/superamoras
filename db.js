const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./db/database.sqlite3');

// Create tables
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS articles (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      author TEXT NOT NULL,
      body TEXT NOT NULL
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS comments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      article_id INTEGER NOT NULL,
      author TEXT NOT NULL,
      text TEXT NOT NULL,
      FOREIGN KEY (article_id) REFERENCES articles (id)
    );
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      email TEXT NOT NULL
    );
  `);
  db.run(`
    INSERT INTO articles (title, author, body)
    VALUES ('Article 1', 'John Doe', 'This is the body of article 1');
  `);

  db.run(`
    INSERT INTO articles (title, author, body)
    VALUES ('Article 2', 'Jane Doe', 'This is the body of article 2');
  `);

  db.run(`
    INSERT INTO comments (article_id, author, text)
    VALUES (1, 'John Doe', 'This is a comment on article 1');
  `);

  db.run(`
    INSERT INTO comments (article_id, author, text)
    VALUES (1, 'Jane Doe', 'This is another comment on article 1');
  `);
});
// Insert dummy data
/*db.serialize(() => {
    db.run(`
      INSERT INTO articles (title, author, body)
      VALUES ('Article 1', 'John Doe', 'This is the body of article 1');
    `);
  
    db.run(`
      INSERT INTO articles (title, author, body)
      VALUES ('Article 2', 'Jane Doe', 'This is the body of article 2');
    `);
  
    db.run(`
      INSERT INTO comments (article_id, author, text)
      VALUES (1, 'John Doe', 'This is a comment on article 1');
    `);
  
    db.run(`
      INSERT INTO comments (article_id, author, text)
      VALUES (1, 'Jane Doe', 'This is another comment on article 1');
    `);
  });
*/

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

module.exports = { db, getComments, addComment, getAdminStats };