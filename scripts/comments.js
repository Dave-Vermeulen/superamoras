// Fetch comments from database and generate comment list
fetch('/api/comments')
    .then(response => response.json())
    .then(comments => {
        const commentList = document.getElementById('comment-list');
        comments.forEach(comment => {
            const commentElement = document.createElement('div');
            commentElement.innerHTML = `
                <h4>${comment.author}</h4>
                <p>${comment.text}</p>
            `;
            commentList.appendChild(commentElement);
        });
    });

// Submit comment form
const commentForm = document.getElementById('comment-form');
commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const commentText = document.getElementById('comment-text').value;
    fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: commentText }),
    })
    .then(response => response.json())
    .then(comment => {
        const commentList = document.getElementById('comment-list');
        const commentElement = document.createElement('div');
        commentElement.innerHTML = `
            <h4>${comment.author}</h4>
            <p>${comment.text}</p>
        `;
        commentList.appendChild(commentElement);
    });
});