import Comment from "../comment/Comment";


export default function ({comments}) {
  return (
    <div>
        {
            comments.map(value => <Comment oneComment={value}/>)
        }
    </div>
  );
}
