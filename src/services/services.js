

const getUsers = () => {
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json())
}

const getUser = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + id)
        .then(value => value.json())
}

const getPostsOfUser = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts')
        .then(value => value.json())


}
const getPosts = () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
        .then(value => value.json())
}
const getPost = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/posts' + id)
        .then(value => value.json())
}
export {getUsers, getUser, getPostsOfUser, getPosts, getPost}