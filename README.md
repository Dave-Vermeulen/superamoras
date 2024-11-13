# superamoras
## Blog File Structure

# Superamoras Blog

A simple blog built with HTML, CSS, JavaScript, and SQLite.


## Getting Started

1. Clone the repository: `git clone https://github.com/your-username/superamoras-blog.git`
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Open your browser at `http://localhost:3000`


## Features

* Article listing
* Article details
* Commenting system
* Admin dashboard


## API Endpoints

* `/api/comments`: Get all comments
* `/api/comments`: Post a new comment
* `/api/admin/stats`: Get admin stats


## Database

* SQLite database file: `database.sqlite3`


## superamoras-blog/
│
├── index.html
├── articles.html
├── article.html
├── comments.html
├── admin.html
├── styles/
│   ├── global.css
│   ├── articles.css
│   ├── comments.css
│   └── admin.css
├── scripts/
│   ├── global.js
│   ├── articles.js
│   ├── comments.js
│   └── admin.js
├── images/
│   ├── logo.png
│   └── default-article-image.jpg
├── db/
│   └── database.sqlite3
├── db.js
├── api/
│   ├── comments.js
│   └── admin.js
├── package.json
├── README.md
└── server.js