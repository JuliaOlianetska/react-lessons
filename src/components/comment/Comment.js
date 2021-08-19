export default function Comment({oneComment, displayCommentsDetails}) {

const onClickCommentsDetails = () => {
    displayCommentsDetails(oneComment)
};
  return (

    <div>

      <p>{oneComment.id} {oneComment.name}</p>
        <button onClick={onClickCommentsDetails}>details</button>
    </div>
  );
}