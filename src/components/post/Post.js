import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../service";
import Comments from "../comments/Comments";
import DetailsOfPost from "../details-of-post/DetailsOfPost";
import "../style.css"

export default function Post({onePost, postDetails}) {

    let [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsOfPost(onePost.id).then(value => setComments([...value]))
    }, [onePost.id])

    const onClickPostDetails = () => {
        postDetails(onePost);
    }

    return (
    <div className={'one-post'}>
        <h5>Post id: {onePost.id} Post title: {onePost.title}</h5>
        <div className={'button'}>
            <button onClick={onClickPostDetails}>Details</button>
        </div>
<div>
</div>

    </div>
  );
}