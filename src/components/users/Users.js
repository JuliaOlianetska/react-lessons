import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import {useEffect, useState} from "react";
import User from "../user/User";
import {getUsers} from "../../services/services";


import UserDetails from "../userDetails/UserDetails";
import Posts from "../posts/Posts";

export default function Users(props) {
    console.log(props);
    let {match:{url}, history}=props;

    let [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers().then(value => setUsers([...value]))
    }, [])
  return (
    <div>
        {
            users.map(eachUser => <User key={eachUser.id} eachUser={eachUser} history={history}/>)
        }
        <Route path={`${url}/:id`} render={(props)=>{
            console.log(props);

            return <UserDetails {...props}/>}}/>
    </div>
  );
}