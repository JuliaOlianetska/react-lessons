import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

import Post from "../post/Post";
import {useEffect, useState} from "react";
import {getPosts} from "../../services/services";
import PostDetails from "../postDetails/PostDetails";


export default function Posts(props) {

  let [posts, setPosts] = useState([]);


  useEffect(() => {
    getPosts().then(value => setPosts([...value]))
  }, [])


  return (
    <div>
      {
        posts.map(onePost => <Post onePost={onePost}/>)
      }


    </div>
  );
}