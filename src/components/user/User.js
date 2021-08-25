import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";


export default function User({eachUser}) {
  return (
    <div>
        {eachUser.name} - <Link to={'/user-page/' + eachUser.id}>user details</Link>

    </div>
  );
}