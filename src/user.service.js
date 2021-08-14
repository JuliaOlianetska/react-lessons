

const urlUsers = ('https://jsonplaceholder.typicode.com/users');
const getUsers = () => {
    return fetch (urlUsers).then(value => value.json());
};

const getUser = (id) => {
    return fetch (urlUsers + '/' + id)
        .then (value => value.json());
}

const getPostsOfUser = (id) => {
    return fetch(urlUsers + '/' + id +'/posts')
        .then(value => value.json());
}

const getCommentsOfPost = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
        .then(value => value.json());
}


export {getUsers, getUser,getPostsOfUser, getCommentsOfPost};