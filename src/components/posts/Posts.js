import Post from "../post/Post";

export default function ({items}) {
  return (
    <div>
        {
            items.map(somePost => <Post somePost={somePost}/>)
        }
    </div>
  );
}