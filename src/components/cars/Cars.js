import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";
import Car from "../car/Car";

export default function Cars() {

  let [cars, setCars] = useState([]);

  useEffect(() => {
    getCars().then (value => setCars(value))
  }, [])


  return (
    <div>

        {
            cars.map(oneCar => <Car key={oneCar.id} oneCar={oneCar}/>)
        }
    </div>
  );
}