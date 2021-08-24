import {useEffect, useState} from "react";
import {getCars} from "../services";
import Form2 from "./Form2";
import SelectedCar from "./SelectedCar";

export default function SelectedCars() {

    let [cars, setCars] = useState([]);
    let [car, setCar] = useState([])
    let [value, setValue] = useState('')
    let [model, setModel] = useState('')
    useEffect(()=> {
        getCars().then(value => setCars([...value]))
    },[])

const changeSelectValue = (e) => {
        setValue(e.target.value)
    console.log(e.target.value)
}
const putModelToIn = (e) => {
        setModel(e.target.value)
        console.log(e.target.value)
}
  return (
    <div>
        <select value={value} onChange={changeSelectValue}>

                {
                    cars.map((eachCar) => (
                        <option key={eachCar.id} value={eachCar.id}>{eachCar.id} {eachCar.model}, {eachCar.price} USD, {eachCar.year} year
                    </option>
                    ))}

        </select>
        <select value={value} onChange={putModelToIn}>

            {
                cars.map((eachCar) => (
                    <option key={eachCar.id} value={eachCar.id}>{eachCar.model}</option>
                ))}

        </select>
        <select value={value}>

            {
                cars.map((eachCar) => (
                    <option value={eachCar.id}>{eachCar.price} USD</option>
                ))}

        </select>
        <select value={value}>

            {
                cars.map((eachCar) => (
                    <option value={eachCar.id}>{eachCar.year} year</option>
                ))}

        </select>
        <p>{value}</p>
        <p>{model}</p>
        <form>
            <input type="text" name={'model'} value={value}/>
            <input type="text" name={'model'} value={value}/>
            <button>UPDATE</button>
        </form>
        <Form2 eachCar={'eachCar'}/>
    </div>
  );
}