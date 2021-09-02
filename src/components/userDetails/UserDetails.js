import {useEffect, useState} from "react";
import {getUser} from "../../services/services";


export default function UserDetails({history, location: state, match:{params:{id}}}) {
  console.log(state);

  let [user, setUser] = useState([]);

  useEffect(() => {
      getUser(id).then(value => setUser({...value}))
  },[id])

    return (
    <div>

<h4>DETAILS:</h4>
      <p>name: {user.name}</p>
      <p>username: {user.username}</p>
      <p>email: {user.email}</p>
      <p>street: {JSON.stringify(state.state.address.street)}</p>
      <p>city: {JSON.stringify(state.state.address.city)}</p>
      <p>company name: {JSON.stringify(state.state.company.name)}</p>
      <p>catch phrase: {JSON.stringify(state.state.company.catchPhrase)}</p>
      <p>email: {user.phone}</p>
    </div>
  );
}