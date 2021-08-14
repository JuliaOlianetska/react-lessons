import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../user.service";
import Posts from "../posts/Posts";
import "../style.css";


export default function User({someUser}) {

  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsOfUser(someUser.id)
        .then(data => setPosts([...data]))
  }, [someUser.id]);


  return (
    <div className={'user-info'}>

        <h4>{someUser.id} - {someUser.name}, email: {someUser.email}</h4>
      <h5>User's posts</h5>
      <Posts items={posts}/>
    </div>
  );
}