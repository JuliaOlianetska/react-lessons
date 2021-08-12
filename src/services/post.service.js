let postUrl = 'https://jsonplaceholder.typicode.com/posts';

const getPosts = () => {
    return fetch(postUrl).then(value => value.json());
};

export {getPosts};