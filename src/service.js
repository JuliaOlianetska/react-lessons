 let ulrPost = 'https://jsonplaceholder.typicode.com/posts';


 const getPosts = () => {
    return fetch(ulrPost).then (value => value.json())
 };

const getCommentsOfPost = (id) => {
    return fetch(ulrPost + '/' + id + '/comments').then (value => value.json())
};
 export {getPosts,getCommentsOfPost};

