import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/services";
import Post from "../post/Post";

export default function Posts(props) {
  console.log(props);
  let {match:{url}, history}=props;


  let [user, setUser] = useState({});
  let [posts, setPosts] = useState([]);
let [post, setPost] = useState({});

  useEffect(() => {
    getPostsOfUser().then(value => console.log(value))
  }, [])


  return (
    <div>
      {posts.map(eachPost=> <Post eachPost={eachPost}/>)}

    </div>
  );
}