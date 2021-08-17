import "../style.css"


export default function Car({oneCar, carButtonDelete}) {

    const onClickDelete = () => {
        carButtonDelete(oneCar);
        console.log(onClickDelete);
    }
const onClickEdit = () => {
    console.log(onClickEdit);
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