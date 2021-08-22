import {useEffect, useState} from "react";
import {deleteCar, editCar, getCars} from "../../services/service.cars";
import Car from "../car/Car";
import "../style.css"

export default function Cars() {

    let [cars, setCars] = useState([]);
    let [car, setCar] = useState({});

    useEffect(() => {
        getCars(). then(value => setCars([...value]))
    }, [])

const carButtonDelete = (id) => {
    deleteCar(id).then(value => console.log(...value));
    let filterCarsArray = cars.filter(value => value.id !== id);
    setCars([...filterCarsArray]);
    console.log(filterCarsArray)
}
const carButtonEdit = (car, e) => {


}


  return (
    <div className={'all-cars'}>
        {
            cars.map(oneCar => <Car key={oneCar.id} oneCar={oneCar} carButtonDelete={carButtonDelete} carButtonEdit={carButtonEdit}/>)
        }

    </div>
  );
}