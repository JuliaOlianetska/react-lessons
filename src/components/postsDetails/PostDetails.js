import {useEffect, useState} from "react";

import {getCommentsOfPost} from "../../service";
import Comment from "../comment/Comment";
import "../style.css"

export default function PostDetails() {

    let [detail, setDetail] = useState({});
        let [comments, setComments] = useState([]);

        useEffect(() => {
            getCommentsOfPost(detail.id).then(value => setComments([...value]))
        }, [detail.id])


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