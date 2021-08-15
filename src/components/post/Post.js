export default function Post({onePost, postDetails}) {

    const onClickPostDetails = () => {
        postDetails(onePost);
    }
  return (
    <div>
        <h5>Post id: {onePost.id}</h5>
        <h4>Post title: {onePost.title}</h4>
<button onClick={onClickPostDetails}>Details</button>
    </div>
  );
}