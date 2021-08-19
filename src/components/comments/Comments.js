

import Comment from "../comment/Comment";
import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../service";
import "../style.css"

export default function Comments({post,displayComments}) {

    let [comment,setComment] = useState({});
    let [comments, setComments] = useState([]);


    useEffect(() => {
        getCommentsOfPost(post.id).then(value => setComments([...value]))
    }, [post.id])


    const onClickCommentsButton = () => {
        displayComments(comment)
        console.log(comment)
    }

const displayCommentsDetails = (comment) => {
        setComment({...comment})
};

        return (
        <div className={'post-details'}>
            <div>
                {
                    <p>post id:</p>
                }
                {JSON.stringify(post.id)}
                {
                    <p>post body:</p>
                }
                {JSON.stringify(post.body)}
            </div>

            <button onClick={onClickCommentsButton}>COMMENTS</button>

            <div>{
                comments.map(oneComment => <Comment oneComment={oneComment} displayCommentsDetails={displayCommentsDetails}/>)
            }</div>


            <div>
                {JSON.stringify(comment.id)}
                {JSON.stringify(comment.email)}
                {JSON.stringify(comment.body)}
            </div>
        </div>

        );

}
