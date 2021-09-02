import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../services/services";
import Post from "../post/Post";
import {Link} from "react-router-dom";

export default function Posts({eachPost}) {


  return (
    <div>
      {
        eachPost.map(onePost => <Post onePost={onePost}/>)
      }
    </div>
  );
}