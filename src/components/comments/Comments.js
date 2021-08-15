import {useEffect, useState} from "react";
import {getComments} from "../../service";
import Comment from "../comment/Comment";
import "../style.css"


export default function Comments() {

let [comments, setComments] = useState([]);
let [comment, setComment] = useState({});

    useEffect(() => {
        getComments().then(value => setComments([...value]))
    }, [])

    const commentDetails = (details) => {
        setComment({...details});
    }

  return (
    <div className={'wrap'}>
        <div>{
            comments.map(oneComment => <Comment key={oneComment.id} oneComment={oneComment}
                                                commentDetails={commentDetails}/>)
        }</div>
<div>
<p>
    {JSON.stringify(comment.name)}

</p>
    <p>
        {JSON.stringify(comment.body)}
    </p>
</div>

    </div>
  );
}