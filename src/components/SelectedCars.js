import {useEffect, useState} from "react";
import {getCars} from "../services";
import SelectedCar from "./SelectedCar";

export default function SelectedCars() {

    let [cars, setCars] = useState([]);
    let [value, setValue] = useState('')
    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');



    let onModelChange = (e) => {
        setModel(e.target.value)
        console.log(e.target.value)
    }
    let onPriceChange = (e) => {
        setPrice(e.target.value)
        console.log(e.target.value)
    }
    let onYearChange = (e) => {
        setYear(e.target.value)
        console.log(e.target.value)
    }
    useEffect(()=> {
        getCars().then(value => setCars([...value]))
    },[])


const changeSelectValue = (e) => {
        setValue(e.target.value)

}
    const editCarButton = (eachCar) => {
        setModel(eachCar.model)
        setPrice(eachCar.price)
        setYear(eachCar.year)
        console.log({...eachCar})
    }

  return (
    <div>
        <form>
        <select value={value} onChange={changeSelectValue}>

                {
                    cars.map((eachCar) => <option key={eachCar.id} value={eachCar.id}>{eachCar.id} {eachCar.model}, {eachCar.price} USD, {eachCar.year} year
                    </option>
                    )}
        </select>

    </form>
        {
        cars.map(eachCar => <SelectedCar eachCar={eachCar} editCarButton={editCarButton}/>)
    }
        <button onClick={editCarButton}>EDIT</button>
        <form>
            <input type="text" name={'model'} value={model} onChange={onModelChange}/>
            <input type="number" name={'price'} value={price} onChange={onPriceChange}/>
            <input type="number" name={'year'} value={year} onChange={onYearChange}/>
            <button>UPDATE</button>
        </form>


    </div>
  );
}