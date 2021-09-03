import {
  BrowserRouter as Router,
      Switch,
      Route,
      Link,
      withRouter
} from "react-router-dom";

export default function Post({onePost}) {
    return (
    <div>
        {onePost.title} - <Link to={{pathname:'/posts-page/' + onePost.id, state:onePost}}>post details</Link>
    </div>
  );
}