import {useState} from "react";

export default function SelectedCar({eachCar, editCarButton}) {

    const onClickEdit = () => {
        console.log(eachCar)
        editCarButton(eachCar);

    }

    return (
        <div>


        </div>
    );
}