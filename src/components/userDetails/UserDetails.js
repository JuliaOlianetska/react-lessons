import {useEffect, useState} from "react";
import {getUser} from "../../services/services";
import Address from "../Address";

export default function UserDetails({location:state, match:{params:{id}}}) {
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
<Address {...address}/>
    </div>
  );
}