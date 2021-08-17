


export default function Car({oneCar}) {
  return (
    <div className={'item-car'}>
        <p>{oneCar.id} -- {oneCar.model}</p>
        <p>{oneCar.year} year, {oneCar.price} USD</p>

    </div>
  );
}