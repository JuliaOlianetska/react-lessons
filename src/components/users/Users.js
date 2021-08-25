import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/services";

export default function Users() {

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])
  return (
    <div>
        {
            users.map(eachUser => <User key={eachUser.id} eachUser={eachUser}/>)
        }

    </div>
  );
}