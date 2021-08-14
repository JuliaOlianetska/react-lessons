import {useEffect, useState} from "react";
import {getPostsOfUser} from "../../user.service";
import Posts from "../posts/Posts";

export default function User({someUser}) {

  let [posts, setPosts] = useState([]);

  useEffect(() => {
    getPostsOfUser(someUser.id)
        .then(data => setPosts([...data]))
  }, [someUser.id]);


  return (
    <div>
      {someUser.id} - {someUser.name}, email: {someUser.email}
      <h5>User's posts</h5>
      <Posts items={posts}/>
    </div>
  );
}