import "../style.css"


export default function Car({oneCar}) {
  return (
    <div className={'item-car'}>
            <p>{oneCar.id} -- {oneCar.model}</p>
            <p>{oneCar.year} year, {oneCar.price} USD</p>
<button>delete</button>
        <button>edit</button>
    </div>
  );
}