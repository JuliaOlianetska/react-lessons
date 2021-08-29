export default function Car({eachCar, putModelToIn}) {

    const modelToInPut = () => {
        console.log(eachCar)
        putModelToIn(eachCar);
    }

  return (
    <div>
    <h4>id: {eachCar.id}, model: {eachCar.model}</h4>
<p>price: {eachCar.price} USD, year: {eachCar.year}</p>
    </div>
  );
}