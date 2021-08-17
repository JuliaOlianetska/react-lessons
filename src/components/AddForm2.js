import {useState} from "react";
import {saveCar} from "../services/car.service";

export default function AddForm2() {

    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');

let onModelChange = (e) => {
console.log('model change');
    console.log(e.target.value);
    setModel(e.target.value);
};
    let onPriceChange = (e) => {
        console.log('price change');
        console.log(e.target.value);
        setPrice(e.target.value);
    };
    let onYearChange = (e) => {
        console.log('year change');
        console.log(e.target.value);
        setYear(e.target.value);
    };

    let carSave = (e)=> {
        e.preventDefault();
        console.log({model, price,year});
        saveCar(carSave);
    };


  return (
    <div>
        <form onSubmit={carSave}>
            <input type="text" name={'model'} value={model} onChange={onModelChange}/>
            <input type="number" name={'price'} value={price} onChange={onPriceChange}/>
            <input type="number" name={'year'} value={year} onChange={onYearChange}/>
            <input type='submit'/>
        </form>

    </div>
  );
}