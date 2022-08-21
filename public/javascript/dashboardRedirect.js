const postList = document.querySelectorAll('.individual-post');

postList.forEach(post => post.addEventListener('click', () => {
    window.location.assign(`/editpost/${post.getAttribute('data-post-id')}`);
}));
document.querySelector('#createButton').addEventListener('click', () => {
    window.location.assign('/newpost');
});