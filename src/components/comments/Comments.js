import Comment from "../comment/Comment";
import {useEffect, useState} from "react";
import {getComments} from "../../services/comment.service";





export default function Comments() {

    let commentsMassive = useState([]);
    let comments = commentsMassive[0];
    let setComments = commentsMassive[1];

    useEffect(() => {
        getComments().then(value => setComments([...value]));

    }, []);



  return (
    <div>
        {
            comments.map(commentItem => <Comment commentItem = {commentItem}/>)
        }
    </div>
  );
}