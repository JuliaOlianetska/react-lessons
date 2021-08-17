export default function Car({oneCar}) {
  return (
    <div>
        {oneCar.id} -- {oneCar.model}, {oneCar.year} -- {oneCar.price}

    </div>
  );
}