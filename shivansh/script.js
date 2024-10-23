document.getElementById('comment-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    const commentSection = document.getElementById('comment-section');
    const newComment = document.createElement('div');
    newComment.classList.add('comment');
    newComment.innerHTML = `<strong>${name}:</strong> <p>${comment}</p>`;
    commentSection.appendChild(newComment);
    document.getElementById('comment-form').reset();
});
