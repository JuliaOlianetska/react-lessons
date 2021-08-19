

import Comment from "../comment/Comment";
import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../service";
import "../style.css"

export default function Comments({post}) {

    let [comment,setComment] = useState({});
    let [comments, setComments] = useState([]);


    useEffect(() => {
        getCommentsOfPost(post.id).then(value => setComments([...value]))
    }, [post.id])


    const onClickCommentsButton = (comment) => {
        setComment({...comment});
        console.log(comments)
    }


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
                comments.map(oneComment => <Comment oneComment={oneComment}/>)
            }</div>


            <div>
                {JSON.stringify(comment.name)}
            </div>
        </div>

        );

}
