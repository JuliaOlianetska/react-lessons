import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

import Posts from "../posts/Posts";



export default function User({eachUser, history}) {
    let navigate = () => {
        history.push('/users-page/' + eachUser.id, eachUser)
    }


  return (
    <div>
        {eachUser.name} - <button onClick={navigate}>user details</button>


        <Router>
           <div>
               <Link to={'/posts'}>posts</Link>
           </div>
<Route path={'/posts'} component={Posts}/>
        </Router>

    </div>
  );
}