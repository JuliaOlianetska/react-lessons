import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/services";
import Posts from "../posts/Posts";



export default function User({eachUser, history}) {
    let navigate = () => {
        history.push('/users-page/' + eachUser.id, eachUser)
    }

    let [posts, setPosts] = useState([]);

    useEffect(() => {
getPostsOfUser().then(value => setPosts([...value]))
    }, [])

  return (
    <div>
        {eachUser.name} - <button onClick={navigate}>user details</button>

        {
            posts.map(eachPost => <Posts eachPost={eachPost}/>)
        }
    </div>
  );
}