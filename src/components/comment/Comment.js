export default function Comment({oneComment,commentDetails}) {

  const commentsDetailsOnClick = () => {
    commentDetails(oneComment);
    console.log(oneComment)
  }
  return (
    <div>

      <p>{oneComment.id} {oneComment.name}</p>
<button onClick={commentsDetailsOnClick}>DETAILS</button>
    </div>
  );
}