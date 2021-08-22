import "../style.css"
import {findAllByDisplayValue} from "@testing-library/react";


export default function Car({oneCar, carButtonDelete, carButtonEdit}) {

    const onClickDelete = () => {
        carButtonDelete(oneCar.id);
        console.log(onClickDelete);
    }
const onClickEdit = () => {

        carButtonEdit(oneCar.id)
    console.log(onClickEdit);
}


    return (
        <div className={'item-car'}>
            <p>{oneCar.id} -- {oneCar.model}</p>
            <p>{oneCar.year} year, {oneCar.price} USD</p>
            <button onClick={onClickDelete}>delete</button>
            <button onClick={onClickEdit}>edit</button>

            <div></div>
        </div>
    );
}