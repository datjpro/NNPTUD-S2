document.addEventListener('DOMContentLoaded', () => {


    // Since you are running json-server on port 3000, we can fetch the data from the API endpoints
    Promise.all([
        fetch('http://localhost:3000/posts').then(res => res.json()),
        fetch('http://localhost:3000/comments').then(res => res.json())
    ])
        .then(([posts, comments]) => {
            // Populate Posts Table
            const postsBody = document.querySelector('#posts-table tbody');
            if (postsBody) {
                postsBody.innerHTML = ''; // Clear existing
                posts.forEach(post => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                    <td>${post.id}</td>
                    <td>${post.title}</td>
                    <td>${post.views}</td>
                `;
                    postsBody.appendChild(row);
                });
            }

            // Populate Comments Table
            const commentsBody = document.querySelector('#comments-table tbody');
            if (commentsBody) {
                commentsBody.innerHTML = ''; // Clear existing
                comments.forEach(comment => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                    <td>${comment.id}</td>
                    <td>${comment.text}</td>
                    <td>${comment.postId}</td>
                `;
                    commentsBody.appendChild(row);
                });
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            document.body.innerHTML += `<p style="color:red">Error loading data: ${error.message}</p>`;
        });
});
function Save() {
    let id = document.getElementById('id').value;
    let text = document.getElementById('text').value;
    let postId = document.getElementById('post-id').value;
    let comment = {
        id: id,
        text: text,
        postId: postId
    };
    fetch('http://localhost:3000/comments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
}
