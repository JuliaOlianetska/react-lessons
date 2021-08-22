import {useEffect, useState} from "react";
import {getCars} from "../services";
import Car from "./Car";

export default function Cars() {

  let [cars, setCars] = useState([]);

  useEffect(()=> {
getCars().then(value => setCars([...value]))
  },[])

  return (
    <div>
      {
        cars.map(eachCar => <Car key={eachCar.id} eachCar={eachCar}/>)
      }

    </div>
  );
}