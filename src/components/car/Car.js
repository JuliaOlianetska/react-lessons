import "../style.css"


export default function Car({oneCar, setCar, carButtonDelete, carButtonEdit}) {

    const onClickDelete = () => {
        carButtonDelete(oneCar.id);
        console.log(onClickDelete);
    }
const onClickEdit = () => {
console.log(oneCar)
        carButtonEdit(oneCar);
setCar(oneCar);
}


    return (
        <div className={'item-car'}>
            <p>{oneCar.id} -- {oneCar.model}</p>
            <p>{oneCar.year} year, {oneCar.price} USD</p>
            <button onClick={onClickDelete}>delete</button>
            <button onClick={onClickEdit}>edit</button>

        </div>
    );
}