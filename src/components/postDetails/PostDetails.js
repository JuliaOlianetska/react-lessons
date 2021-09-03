import {useEffect, useState} from "react";
import {getPost} from "../../services/services";

export default function PostDetails({history, location: state}) {
  console.log(state);

  return (
    <div>

      title - {JSON.stringify(state.state.title)}
      <br/>
body -  {JSON.stringify(state.state.body)}
    </div>
  );
}