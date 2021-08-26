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
        {eachUser.name} - <Link to={{pathname: '/user-page/' + eachUser.id, state: eachUser}}>user details</Link>

    </div>
  );
}