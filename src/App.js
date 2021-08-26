import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";


import Users from "./components/users/Users";
import StaticUserDetails from "./components/staticUserDetails/StaticUserDetails";

export default function App() {
  return (

      <Router>
        <div>
<Link to={'/user-page'}>user page</Link>

        </div>
        <Route path={'/user-page'} component={Users}/>

      </Router>
  );
}