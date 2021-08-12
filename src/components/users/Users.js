import User from "../user/User";
import {useEffect, useState} from "react";
import {getUsers} from "../../services/user.service";

export default function Users() {

  let massive = useState([]);
  let users = massive[0];
  let setUsers = massive[1];


  useEffect(() => {
getUsers().then(value => setUsers([...value]));

  }, [])

  return (
    <div>
        {
users.map(userPerson => <User key={userPerson.id} userPerson = {userPerson}/>)


        }

    </div>
  );
}