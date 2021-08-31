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

const editCar = (id, model, price, year) => {
   return fetch(urlCars + '/' + id, {
        method: 'PUT',
        body: JSON.stringify({
            id: id,
            model: model,
            price: price,
            year: year,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())

}

export {getCars,createCar, editCar};