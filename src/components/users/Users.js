
import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../user.service";

export default function Users() {

let [users, setUsers]  = useState([]);

useEffect(() => {
  getUsers().then(value => setUsers([...value]))
}, [])


  return (
    <div>
      {
        users.map(someUser => <User key={someUser.id} someUser={someUser}/>)
      }

    </div>
  );
}