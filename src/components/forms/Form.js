import {addCar} from "../../services/service.cars";

export default function Form() {
    
    let onFormSubmit =(e) => {

        console.log(e.target.model.value);
        console.log(e.target.price.value);
        console.log(e.target.year.value);

        let saveCar = {model: e.target.model.value, price: e.target.price.value, year: e.target.year.value};
        addCar(saveCar);
    };



  return (
    <div>
        <form onSubmit={onFormSubmit}>
            <input type="text" name={'model'}/>
            <input type="number" name={'price'}/>
            <input type="number" name={'year'}/>
            <button>SAVE</button>
        </form>

    </div>
  );
}