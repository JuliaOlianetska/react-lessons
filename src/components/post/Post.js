import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../user.service";
import Comments from "../comments/Comments";

export default function Post({somePost}) {

  let [comments, setComments] = useState([]);

  useEffect(()=> {
    getCommentsOfPost(somePost.id).then (value => setComments([...value]))
  }, [somePost.id]);


  return (
    <div>

        {somePost.id} - {somePost.title}
<Comments comments={comments}/>
    </div>
  );
}