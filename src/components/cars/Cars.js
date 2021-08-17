import {useEffect, useState} from "react";
import {getCars} from "../../services/service.cars";
import Car from "../car/Car";
import "../style.css"

export default function Cars() {

    let [cars, setCars] = useState([]);

    useEffect(() => {
        getCars(). then(value => setCars([...value]))
    }, [])


  return (
    <div className={'all-cars'}>
        {
            cars.map(oneCar => <Car key={oneCar.id} oneCar={oneCar}/>)
        }

    </div>
  );
}