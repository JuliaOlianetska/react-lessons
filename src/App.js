import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/users-page'}>to users page</Link>
                <br/>
                <Link to={'/posts-page'}>to posts page</Link>
                <br/>
                <Link to={'/comments-page'}>to comments page</Link>


                <Route path={'/users-page'} render={() => <Users/>}/>
                <Route path={'/posts-page'} render={() => <Posts/>}/>
                <Route path={'/comments-page'} component={Comments}/>


            </div>
        </Router>
    );
}