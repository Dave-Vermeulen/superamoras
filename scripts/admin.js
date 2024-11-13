// Fetch admin stats from database
fetch('/api/admin/stats')
    .then(response => response.json())
    .then(stats => {
        const adminStats = document.getElementById('admin-stats');
        adminStats.innerHTML = `
            <p>Articles: ${stats.articles}</p>
            <p>Comments: ${stats.comments}</p>
            <p>Users: ${stats.users}</p>
        `;
    });

// Add article button click handler
const addArticleButton = document.getElementById('add-article');
addArticleButton.addEventListener('click', () => {
    // Open add article modal
});

// Manage comments button click handler
const manageCommentsButton = document.getElementById('manage-comments');
manageCommentsButton.addEventListener('click', () => {
    // Open manage comments modal
});