const createPost = async (e) => {
    e.preventDefault();
    const titleInput = document.querySelector('#newTitle').value.trim();
    const contentInput = document.querySelector('#newContent').value.trim();
    const userID = 1;
    const response = await fetch('/api/post', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
            description: contentInput,
            title: titleInput,
            user_id: userID,
        })
    });
    if(response.ok) {
        window.location.assign('/dashboard');
    } else {
        alert('Cannot create post');
    }
}

document.querySelector('#submitButton').addEventListener('click', createPost);