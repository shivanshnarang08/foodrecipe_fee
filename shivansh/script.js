document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get name and comment from the form
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // Create new comment element
    const commentSection = document.getElementById('comment-section');
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<strong>${name}:</strong> <p>${comment}</p>`;

    // Append the new comment
    commentSection.appendChild(newComment);

    // Clear the form
    document.getElementById('comment-form').reset();
});
