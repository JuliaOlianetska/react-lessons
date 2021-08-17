import {useEffect, useState} from "react";
import {deleteCar, getCars} from "../../services/service.cars";
import Car from "../car/Car";
import "../style.css"

export default function Cars() {

    let [cars, setCars] = useState([]);
    let [car, setCar] = useState({});

    useEffect(() => {
        getCars(). then(value => setCars([...value]))
    }, [])

const carButtonDelete = (deletedCar) => {
        setCar({...deletedCar});
    deleteCar(car.id).then(value => setCar(''))
}


  return (
    <div className={'all-cars'}>
        {
            cars.map(oneCar => <Car key={oneCar.id} oneCar={oneCar} carButtonDelete={carButtonDelete}/>)
        }

    </div>
  );
}