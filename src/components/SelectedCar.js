import {useState} from "react";

export default function SelectedCar({eachCar, editCarButton, setCar}) {

    const onClickEdit = () => {
        console.log(eachCar)
        editCarButton(eachCar);
        setCar(eachCar);

    }

    return (
        <div>


        </div>
    );
}