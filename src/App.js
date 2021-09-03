import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import "./components/styles.css";

import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import PostDetails from "./components/postDetails/PostDetails";


export default function App() {
    return (

        <Router>
            <div className={'links'}>
                <Link to={'/users-page'}>users page</Link>
                <Link to={'/posts-page'}>posts page</Link>
            </div>
            <Route path={'/users-page'} component={Users}/>
            <Route exact path={'/posts-page'} component={Posts}/>
            <Route path={'/posts-page/:id'} render={(props) => {
                return <PostDetails {...props}/>
            }}/>
        </Router>
    );
}