const postComment = async (e) => {
    e.preventDefault();
    const commentInput = document.querySelector('.commentInput').value.trim();
    const postID = window.location.pathname.split('/').pop();
    const userID = '1';

    if (commentInput) {
        const response = await fetch('/api/comment', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                content: commentInput,
                post_id: postID,
                user_id: userID,
            })
        });
        if (response.ok) {
            document.location.assign(`/thread/${postID}`);
        };
    } else {
        alert('Please insert a comment before posting')
    };
};

document.querySelector('#submitCommentButton').addEventListener('click', postComment) 