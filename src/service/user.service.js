
let url = 'https://jsonplaceholder.typicode.com/users';

    const getUsers = () => {
    return fetch (url).then (value => value.json())
};

    const getPostsOfUser = (id) => {
        return fetch(url + '/' + id + '/posts').then(value => value.json())
    }

    const getPost = (id) => {
        return fetch('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(value => value.json())
    }
    export {getUsers, getPostsOfUser, getPost}
