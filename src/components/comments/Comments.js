
import {useEffect, useState} from "react";

import {getCommentsOfPost} from "../../service";
import Comment from "../comment/Comment";
import "../style.css"


export default function Comments() {

let [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsOfPost().then(value => setComments([...value]))
    }, [])


  return (
    <div className={'wrap'}>
        <button>Comments</button>
            <div>

                {
                    comments.map(oneComment => <Comment key={oneComment.id} oneComment={oneComment}/>)
                }


            </div>





    </div>
  );
}
