import {useEffect, useState} from "react";
import {getComments} from "../services/services";
import Comment from "./Comment";

export default function Comments() {

  let [comments, setComments] = useState([]);
  useEffect(()=> {
    getComments().then(value => setComments([...value]))

  }, [])
  return (
    <div>
      {
        comments.map(oneComment=> <Comment key={oneComment.id} oneComment={oneComment}/>)
      }

    </div>
  );
}