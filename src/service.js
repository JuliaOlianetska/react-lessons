 let ulrPost = 'https://jsonplaceholder.typicode.com/posts';


 const getPosts = () => {
    return fetch(ulrPost).then (value => value.json())
 };

const getComments = () => {
    return fetch('https://jsonplaceholder.typicode.com/comments').then (value => value.json())
};

const getCommentsOfPost = (postId) => {
    return fetch( ulrPost +'/' + postId + '/comments').then(value => value.json())
}
 export {getPosts,getComments, getCommentsOfPost};



