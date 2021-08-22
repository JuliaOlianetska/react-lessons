let carUrl = 'http://91.201.233.14/api/v1/cars';

const addCar = (car) => {
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



const getCars = () => {
    return fetch(carUrl). then(value => value.json());
}

const deleteCar = (id) => {
    return fetch(carUrl +'/' + id, {
        method: 'DELETE',
        body: JSON.stringify(id),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
        .then((json) => console.log(json));

}

const editCar = (car) => {
    return fetch(carUrl +'/' + car.id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then((response) => response.json())
        .then((json) => console.log(json));

}



export {addCar, getCars, deleteCar, editCar};
