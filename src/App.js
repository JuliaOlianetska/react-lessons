import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";

export default function App() {
  return (
      <Router>
    <div>
      <Link to={'/cars'}>to cars page</Link>

      <Route path={'/cars'} render={<Cars/>}></Route>

    </div>
      </Router>
  );
}