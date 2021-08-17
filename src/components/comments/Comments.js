import {useEffect, useState} from "react";
import {getComments, getCommentsOfPost} from "../../service";
import Comment from "../comment/Comment";
import "../style.css"


export default function Comments() {

let [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsOfPost().then(value => setComments([...value]))
    }, [])


  return (
    <div className={'wrap'}>
            <div>
             <Comments/>
            </div>

            <button>Comments</button>



    </div>
  );
}