
import {saveCar} from "../services/car.service";

export default function AddForm() {


let onFormSubmit = (e) => {
    e.preventDefault();
console.log('form submit');
    console.log(e.target.model.value);
    console.log(e.target.price.value);
    console.log(e.target.year.value)
    let carToSave = {model : e.target.model.value, price: e.target.price.value, year: e.target.year.value}
    saveCar(carToSave);
};


  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <input type="text" name={'model'}/>
            <input type="number" name={'price'}/>
            <input type="number" name={'year'}/>
            <button>save</button>
        </form>

    </div>
  );
}