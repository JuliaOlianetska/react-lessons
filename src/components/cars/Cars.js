import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";

export default function Cars() {

let [cars, setCars] = useState([]);

useEffect(() => {
  getCars().then (value => setCars( [value]))
}, []);

  return (
    <div>
cars

    </div>
  );
}