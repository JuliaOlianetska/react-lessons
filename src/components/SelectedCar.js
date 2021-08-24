export default function SelectedCar({eachCar}) {

    return (
        <div>
            {eachCar.model} {eachCar.price}
            <form>
            <input type="text" name={'model'} value={eachCar.model}/>
            <input type="text" name={'model'} value={eachCar.price}/>
            <button>UPDATE</button>
            </form>
        </div>
    );
}