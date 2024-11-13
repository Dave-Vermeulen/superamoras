// Fetch article content from database and display
fetch('/api/article/${articleId}')
    .then(response => response.json())
    .then(article => {
        const articleContent = document.querySelector('.article-content');
        articleContent.innerHTML = `
            <h1 id="article-title">${article.title}</h1>
            <p id="article-author">${article.author}</p>
            <div id="article-body">${article.body}</div>
        `;
    });