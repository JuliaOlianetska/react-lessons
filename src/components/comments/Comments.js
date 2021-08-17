
import {useEffect, useState} from "react";

import {getCommentsOfPost} from "../../service";
import Comment from "../comment/Comment";
import "../style.css"


export default function Comments({allComments, commentsDisplay}) {

let [comments, setComments] = useState([]);

const commentsButton = () => {
    commentsDisplay(allComments)

};

  return (
    <div>
        <button onClick={commentsButton}>Comments</button>
            <div>

                {
                    comments.map(oneComment => <Comment key={oneComment.id} oneComment={oneComment}/>)
                }


            </div>





    </div>
  );
}
