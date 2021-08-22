import {useEffect, useState} from "react";
import {getPosts} from "../services/services";
import Post from "./Post";

export default function Posts() {

  let [posts, setPosts] = useState([]);
  useEffect(()=> {
    getPosts().then(value => setPosts([...value]))
  },[])


  return (
    <div>
      {
        posts.map(onePost => <Post key={onePost.index} onePost={onePost}/>)
      }

    </div>
  );
}