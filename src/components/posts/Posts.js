
import Post from "../post/Post";


export default function Posts({posts}) {
console.log(posts)

  return (
    <div>
      {
        posts.map(onePost => <Post onePost={onePost}/>)
      }
    </div>
  );
}