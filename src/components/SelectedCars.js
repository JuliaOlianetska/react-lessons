import {useEffect, useState} from "react";
import {editCar, getCars} from "../services";
import SelectedCar from "./SelectedCar";

export default function SelectedCars() {

    let [cars, setCars] = useState([]);
    let [car, setCar] = useState({});
    let [value, setValue] = useState('')

    let [formData, setFormData] = useState({model: '', price: '', year: ''});


    let onChange = ({target: {value, name}}) => setFormData({...formData, [name]: value})


    useEffect(() => {
        getCars().then(value => setCars([...value]))
    }, [])


    const changeSelectValue = (e) => {
        const car = cars.find(car => +e.target.value === car.id)
        console.log(car)
        setFormData(car)
    }

    useEffect(() => {
        editCar().then (value => setCar ({...value}))
            }, [])

    return (
        <div>
            <form>
                <select value={value} onChange={changeSelectValue}>
                    {
                        cars.map((eachCar) => <option key={eachCar.id}
                                                      value={eachCar.id}>{eachCar.id} {eachCar.model}, {eachCar.price} USD, {eachCar.year} year
                            </option>
                        )}
                </select>
            </form>

            <form>
                <input type="text" name={'model'} value={formData.model} onChange={onChange}/>
                <input type="number" name={'price'} value={formData.price} onChange={onChange}/>
                <input type="number" name={'year'} value={formData.year} onChange={onChange}/>
                <button>UPDATE</button>
            </form>


        </div>
    );
}