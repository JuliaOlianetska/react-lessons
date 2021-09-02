import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";


import Users from "./components/users/Users";


export default function App() {
  return (

      <Router>
        <div>
<Link to={'/users-page'}>users page</Link>

        </div>
        <Route path={'/users-page'} component={Users}/>

      </Router>
  );
}