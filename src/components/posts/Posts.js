import {useEffect, useState} from "react";
import {getPosts} from "../../service";
import Post from "../post/Post";
import "../style.css"

import Comments from "../comments/Comments";



export default function Posts() {  

    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);
    let [comments, setComments] = useState([]);
    let [comment, setComment] = useState({});

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])


    const postDetails = (details) => {
        setPost({...details});

    }
    const displayComments = (comment) => {
        setComment({...comment})
    };


    return (
        <div className={'wrap'}>

            <div className={'all-posts'}>
                {
                    posts.map(onePost => <Post key={onePost.id} onePost={onePost} postDetails={postDetails}/>)
                }
            </div>
            {post &&
            <Comments post={post} comments={comments} displayCommentsDetails={displayComments}/>
            }

        </div>
    );
}