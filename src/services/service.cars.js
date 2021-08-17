let carUrl = 'http://195.72.146.25/api/v1/cars';

let addCar = (car) => {
    fetch(carUrl, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
};



let getCars = () => {
    return fetch(carUrl). then(value => value.json());
}

export {addCar, getCars};
