import {useEffect, useState} from "react";
import {getCommentsOfPost, getPosts} from "../../service";
import Post from "../post/Post";
import "../style.css"
import Comments from "../comments/Comments";



export default function Posts() {

    let [posts, setPosts] = useState([]);
    let [post, setPost] = useState(null);
    let [comments, setComments] = useState([]);

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, [])


    const postDetails = (details) => {
        setPost({...details});



    }
    const commentsDisplay = (post) => {
        console.log({...post});
        getCommentsOfPost(post.id).then(value => setComments([...value]))
    }

    return (
        <div className={'wrap'}>

            <div className={'all-posts'}>
                {
                    posts.map(onePost => <Post key={onePost.id} onePost={onePost} postDetails={postDetails}/>)
                }
            </div>
            {post &&
            (<div className={'post-details'}>
                {
                    <p>post id:</p>
                }
                {JSON.stringify(post.id)}
                {
                    <p>post body:</p>
                }
                {JSON.stringify(post.body)}

                <Comments allComments={comments} commentsDisplay={commentsDisplay}/>

            </div>)
            }


        </div>
    );
}