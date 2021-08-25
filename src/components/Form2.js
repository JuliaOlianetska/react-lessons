import {useEffect, useState} from "react";

import {getCars} from "../services";

import SelectedCar from "./SelectedCar";
import SelectedCars from "./SelectedCars";

export default function Form2({eachCar}) {

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


    return (
        <div>


            <form>
                <input type="text" name={'model'} value={model} onChange={onModelChange}/>
                <input type="number" name={'price'} value={price} onChange={onPriceChange}/>
                <input type="number" name={'year'} value={year} onChange={onYearChange}/>
                <button>UPDATE</button>
            </form>


        </div>
    );
}