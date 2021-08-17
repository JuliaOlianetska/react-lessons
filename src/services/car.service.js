const saveCar = (car) => {

    fetch('http://192.168.1.253/api/v1/cars', {
        method: 'POST',
        body: JSON.stringify(),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
        .then((response) => response.json())
        .then((json) => console.log(json));
};


const getCars = () => {

    return fetch('http://195.72.146.25/api/v1/cars').then (value => value.json())
    console.log(getCars)
}


export {saveCar, getCars};


