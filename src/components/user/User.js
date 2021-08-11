/*
Взяти масив usersList.
Створити компонент,котрий характеризує юзера.
Створити компонент,котрий характеризує підоб'єкт юзера address. Використати в компоненті юзера.
Створити компонент,котрий характеризує підоб'єкт адреси юзера geo. Використати в компоненті адреси.
Вкладеність компонентів : App->Users->User->Address->Geo
Вивести всі об'єкти з масиву
 */


import Address from "../address/Address";
import Company from "../company/Company";
import "../css.css"



export default function User({id, name, surname, email, address, phone, website, company}) {


    return (
        <div className={"user"}>
            <div>
                <h3>{name} {surname}</h3>
                <h4>User's id: {id}</h4>
                <h4>'User's email:' {email}</h4>
                <Address {...address}/>
                <h4>User's phone: {phone}</h4>
                <h4>Website: {website}</h4>
                <Company {...company}/>
            </div>
        </div>
    );
}