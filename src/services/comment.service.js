
let urlComments = ('https://jsonplaceholder.typicode.com/comments');
const getComments = () => {
    return fetch(urlComments)
        .then (value => value.json())
};

export {getComments};
