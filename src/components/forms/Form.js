import {useState} from "react";
import {addCar, editCar} from "../../services/service.cars";
import Car from "../car/Car";

export default function Form({car, carButtonEdit}) {


    let onFormSubmit =(e) => {

        console.log(e.target.model.value);
        console.log(e.target.price.value);
        console.log(e.target.year.value);

        let saveCar = {model: e.target.model.value, price: e.target.price.value, year: e.target.year.value};
        addCar(saveCar);
    };

    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');

    let onModelChange =(e) => {
        console.log(e.target.value);
        setModel(e.target.value);
    }

    let onPriceChange =(e) => {
        console.log(e.target.value);
        setPrice(e.target.value);
    }
    let onYearChange =(e) => {
        console.log(e.target.value);
        setYear(e.target.value);
    }





  return (
    <div>
                <form onSubmit={onFormSubmit}>
                    <input type="text" name={'model'} value={model} onChange={onModelChange} placeholder={'model'}/>
                    <input type="number" name={'price'} value={price} onChange={onPriceChange}/>
                    <input type="number" name={'year'} value={year} onChange={onYearChange}/>
                    <button>SAVE</button>
                </form>




        </div>
  );
}