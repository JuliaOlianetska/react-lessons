import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/services";
import StaticUserDetails from "../staticUserDetails/StaticUserDetails";
import {Route} from "react-router-dom";
import {logDOM} from "@testing-library/react";

export default function Users(props) {
    console.log(props);
    let {match:{url}}=props;

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])
  return (
    <div>
        {
            users.map(eachUser => <User key={eachUser.id} eachUser={eachUser}/>)
        }
        <Route path={`${url}/:id`} render={(props)=>{
            console.log(props);
            return <StaticUserDetails {...props}/>}}/>

    </div>
  );
}