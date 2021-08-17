import {useEffect, useState} from "react";
import {getCars} from "../../services/car.service";
import Car from "../car/Car";

export default function Cars({cars}) {

  return (
    <div>
        {
            cars.map(value => oneCar  )
        }
    </div>
  );
}