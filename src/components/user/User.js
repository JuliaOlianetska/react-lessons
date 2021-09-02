import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

import Posts from "../posts/Posts";
import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/services";
import Post from "../post/Post";



export default function User({eachUser, history}) {
    let navigate = () => {
        history.push('/users-page/' + eachUser.id, eachUser)
    }
    let [posts, setPosts] = useState([]);


    useEffect(() => {
        getPostsOfUser(eachUser.id).then(value => setPosts([value]))
    }, [eachUser.id])


  return (
    <div>
        {eachUser.name} - <button onClick={navigate}>user details</button>
        <Posts/>


    </div>
  );
}