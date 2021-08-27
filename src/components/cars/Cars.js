import {useEffect, useState} from "react";
import {addCar, deleteCar, editCar, getCars} from "../../services/service.cars";
import Car from "../car/Car";
import "../style.css"


export default function Cars() {


    let [cars, setCars] = useState([]);
    let [car, setCar] = useState({});
    let [id, setID] = useState('');
    let [model, setModel] = useState('');
    let [price, setPrice] = useState('');
    let [year, setYear] = useState('');


    useEffect(() => {
        getCars(). then(value => setCars([...value]))
    }, [])

    let onFormSubmit =(e) => {
        e.preventDefault();
        let saveCar = {model:model, price: price, year: year};
            addCar(saveCar).then(value => setCars(value))

        }








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
const carButtonDelete = (id) => {
    deleteCar(id).then(value => console.log(...value));
    let filterCarsArray = cars.filter(value => value.id !== id);
    setCars([...filterCarsArray]);
    console.log(filterCarsArray)
}


    const carButtonEdit = (oneCar) => {
        setModel(oneCar.model)
        setPrice(oneCar.price)
        setYear(oneCar.year)
            editCar(id).then(value => console.log(carButtonEdit))

}



  return (
      <div>
          <form  onSubmit={onFormSubmit}>
              <input type="text" name={'model'} value={model} onChange={onModelChange} placeholder={'model'}/>
              <input type="number" name={'price'} value={price} onChange={onPriceChange}/>
              <input type="number" name={'year'} value={year} onChange={onYearChange}/>
              <button>SAVE</button>
              <button>EDIT</button>
          </form>
          <div className={'all-cars'}>
              {
                  cars.map(oneCar => <Car key={oneCar.id} oneCar={oneCar} carButtonDelete={carButtonDelete}
                                          carButtonEdit={carButtonEdit}/>)
              }

          </div>
      </div>
  );
}