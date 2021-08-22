import {useEffect, useState} from "react";
import {getUsers} from "../services/services";
import User from "./User";

export default function Users() {

    let [users, setUsers] = useState([]);
    useEffect(()=> {
        getUsers().then(value => setUsers([...value]))
        console.log(getUsers())
    }, [])

  return (
    <div>
        {
            users.map(oneUser => <User key={oneUser.id} oneUser={oneUser}/>)
        }

    </div>
  );
}