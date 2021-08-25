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
        <Route exact path={'/user-page'} component={Users}/>
        <Route path={'/user-page/:id'} render={()=>{
        return <StaticUserDetails/>}
        }/>
      </Router>
  );
}