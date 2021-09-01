import {useEffect, useState} from "react";
import {getUser} from "../../services/services";


export default function UserDetails({history, location: {state: {address: {street}}}, match:{params:{id}}}) {
  console.log(id);

  let [user, setUser] = useState([]);

  useEffect(() => {
      getUser(id).then(value => setUser({...value}))
  },[id])

    return (
    <div>
      name: {user.name}
      <br/>
      email: {user.email}
      <br/>

    </div>
  );
}