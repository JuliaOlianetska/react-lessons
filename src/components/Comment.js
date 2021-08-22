export default function Comment({oneComment}) {
  return (
    <div>
      <h4>post id: {oneComment.postId}</h4>
      <p>name: {oneComment.name}</p>
      <p>body: {oneComment.body}</p>
    </div>
  );
}