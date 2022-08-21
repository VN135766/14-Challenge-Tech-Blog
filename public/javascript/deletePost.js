const deletePost = async (e) => {
    e.preventDefault();
    const postID = window.location.pathname.split('/').pop();
    const response = await fetch(`/api/post/${postID}`, {
        method:'DELETE',
        headers: { 'Content-type': 'application/json' }
    })
    if (response.ok) {
        window.location.assign('/dashboard');
    } else {
        alert('Cannot delete post, try again');
    }
}

document.querySelector('#deleteButton').addEventListener('click', deletePost);