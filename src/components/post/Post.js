import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../service";
import Comment from "../comment/Comment";

export default function Post({onePost, postDetails}) {

    
    const onClickPostDetails = () => {
        postDetails(onePost);


    }

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsOfPost(onePost.id).then(value => setComments([...value]))
    }, [onePost.id])




    return (
    <div className={'one-post'}>
        <h5>Post id: {onePost.id} Post title: {onePost.title}</h5>
        <div className={'button'}>
            <button onClick={onClickPostDetails}>Details</button>
        </div>


    </div>
  );
}