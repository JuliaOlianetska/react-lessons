import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../service";
import Comment from "../comment/Comment";

export default function Comments() {

let [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsOfPost().then(value => setComments([...value]))
    }, [])

  return (
    <div>
        {
            comments.map(oneComment => <Comment key={oneComment.id} oneComment={oneComment}/>)
        }


    </div>
  );
}