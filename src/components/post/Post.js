export default function Post({onePost, postDetails}) {

    const onClickPostDetails = () => {
        postDetails(onePost);

    }
  return (
    <div>
        <h5>Post id: {onePost.id} Post title: {onePost.title}</h5>
<button onClick={onClickPostDetails}>Details</button>
    </div>
  );
}