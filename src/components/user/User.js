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
    let [post, setPost] = useState({});

    useEffect(() => {
        getPostsOfUser(eachUser.id).then(value => setPosts([value]))
    }, [eachUser.id])


  return (
    <div>
        {eachUser.name} - <button onClick={navigate}>user details</button>
        {posts.map(eachPost=> <Posts eachPost={eachPost}/>)}

        <Router>
            <div>
                <Link to={'/user-page/' + eachUser.id + '/posts/'}>posts</Link>
            </div>
        </Router>
        <Route path={'/user-page/' + eachUser.id + '/posts/'} render={()=>{return <Posts eachPost={'eachPost'}/>}}/>







    </div>
  );
}