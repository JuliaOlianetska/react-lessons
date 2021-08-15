import {useEffect, useState} from "react";
import {getPosts} from "../../service";
import Post from "../post/Post";
import "../style.css"
import Comments from "../comments/Comments";


export default function Posts() {

  let [posts, setPosts] = useState([]);
let [post, setPost] = useState({});

    useEffect(() => {
        getPosts(). then (value => setPosts([...value]))
    }, [])

    const postDetails = (details) => {
        setPost({...details});
    }

  return (
    <div className={'wrap'}>

        <div>
            {
            posts.map(onePost => <Post key={onePost.id} onePost={onePost} postDetails={postDetails}/>)
        }
        </div>
        {post &&
        (<div>
            {
                <p>post id:</p>
            }
            {JSON.stringify(post.id)}
            {
                <p>post body:</p>
            }
            {JSON.stringify(post.body)}
        </div>)
        }
        <div>
            <Comments/>
        </div>


    </div>
  );
}