import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../user.service";
import Comments from "../comments/Comments";
import "../style.css";

export default function Post({somePost}) {

  let [comments, setComments] = useState([]);

  useEffect(()=> {
    getCommentsOfPost(somePost.id).then (value => setComments([...value]))
  }, [somePost.id]);


  return (
    <div className={'post-title'}>

      <h6>{somePost.id} - {somePost.title}</h6>
<h5>Comments: </h5>
<Comments comments={comments}/>
    </div>
  );
}