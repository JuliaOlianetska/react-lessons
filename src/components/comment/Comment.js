export default function Comment({commentItem}) {
  return (
    <div>
        <p>{commentItem.id} - {commentItem.name}</p>
        <p>{commentItem.email}</p>
        <p>{commentItem.body}</p>

    </div>
  );
}