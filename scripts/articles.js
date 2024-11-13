// Fetch articles from database and generate article cards
fetch('/api/articles')
    .then(response => response.json())
    .then(articles => {
        const articleListing = document.querySelector('.article-listing');
        articles.forEach(article => {
            const articleCard = document.createElement('div');
            articleCard.classList.add('article-card');
            articleCard.innerHTML = `
                <h2>${article.title}</h2>
                <p>${article.author}</p>
                <p>${article.excerpt}</p>
            `;
            articleListing.appendChild(articleCard);
        });
    });