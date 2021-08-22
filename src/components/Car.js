export default function Car({eachCar}) {
  return (
    <div>
    <h4>id: {eachCar.id}, model: {eachCar.model}</h4>
<p>price: {eachCar.price} USD, year: {eachCar.year}</p>
    </div>
  );
}