import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/services";
import Post from "../post/Post";
import {Link} from "react-router-dom";

export default function Posts() {
 ;

  let [posts, setPosts] = useState([]);

  return (
    <div>
      <p>Posts titles:</p>
      {
        posts.map(onePost => <Post onePost={onePost}/>)
      }
    </div>
  );
}