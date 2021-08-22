import {useEffect, useState} from "react";
import {addCar, deleteCar, editCar, getCars} from "../../services/service.cars";
import Car from "../car/Car";
import "../style.css"

export default function Cars() {

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


    let [cars, setCars] = useState([]);
    let [car, setCar] = useState({});

    useEffect(() => {
        getCars(). then(value => setCars([...value]))
    }, [])

const carButtonDelete = (id) => {
    deleteCar(id).then(value => console.log(...value));
    let filterCarsArray = cars.filter(value => value.id !== id);
    setCars([...filterCarsArray]);
    console.log(filterCarsArray)
}
    const carButtonEdit = (id) => {
        editCar(id).then(value => console.log(...value));
    }


  return (
      <div>
          <div>
              <form onSubmit={onFormSubmit}>
                  <input type="text" name={'model'} value={model} onChange={onModelChange} placeholder={'model'}/>
                  <input type="number" name={'price'} value={price} onChange={onPriceChange}/>
                  <input type="number" name={'year'} value={year} onChange={onYearChange}/>
                  <button>SAVE</button>
              </form>

          </div>

          <div className={'all-cars'}>
              {
                  cars.map(oneCar => <Car key={oneCar.id} oneCar={oneCar} carButtonDelete={carButtonDelete}
                                          carButtonEdit={carButtonEdit}/>)
              }
              <div>
                  <form></form>
              </div>
          </div>
      </div>
  );
}