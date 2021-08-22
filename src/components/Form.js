export default function Form() {

const onClickSave = (e) => {
    console.log(e.target.model.value);
    console.log(e.target.price.value);
    console.log(e.target.year.value);
    let carToSave = {model: e.target.model.value, price: e.target.price.value, year: e.target.year.value}
console.log(carToSave)
}


  return (
    <div>
        <form onSubmit={onClickSave}>
            <input type="text" name={'model'}/>
            <input type="number" name={'price'}/>
            <input type="number" name={'year'}/>
            <button>SAVE</button>
        </form>

    </div>
  );
}