import {
  BrowserRouter as Router,
      Switch,
      Route,
      Link,
      withRouter
} from "react-router-dom";

export default function Post({onePost}) {
    console.log(onePost);
    return (
    <div>

        {onePost.title} - <Link to={'/post-details/'}>post details</Link>
    </div>
  );
}