import {useEffect, useState} from "react";
import {getCommentsOfPost} from "../../service";

export default function Post({onePost, postDetails}) {

    
    const onClickPostDetails = () => {
        postDetails(onePost);


    }
  return (
    <div className={'one-post'}>
        <h5>Post id: {onePost.id} Post title: {onePost.title}</h5>
        <div className={'button'}>
            <button onClick={onClickPostDetails}>Details</button>
        </div>


    </div>
  );
}