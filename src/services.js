let urlCars = 'http://91.201.233.14/api/v1/cars';

const getCars = () => {
    return fetch(urlCars).then (value => value.json())
}



const createCar = (car) => {
    fetch(urlCars, {
        method: 'POST',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
}

const editCar = (car) => {
   return fetch(urlCars + '/' + car.id, {
        method: 'PUT',
        body: JSON.stringify(car),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    }).then(() => getCars());
}

export {getCars,createCar, editCar};