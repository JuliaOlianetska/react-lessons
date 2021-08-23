import {useState} from "react";

export default function Form2() {

    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');

    let onModelChange = () => {
        console.log('change')
    }
    let onPriceChange = () => {
        console.log('change')
    }
    let onYearChange = () => {
        console.log('change')
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