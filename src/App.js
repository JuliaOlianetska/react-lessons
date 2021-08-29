import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import Cars from "./components/Cars";
import Form from "./components/Form";
import SelectedCars from "./components/SelectedCars";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/cars'}>to cars page</Link>
                <br/>
                <Link to={'/create-car'}>create car</Link>
                <br/>
                <Link to={'/update-car'}>update car</Link>
                <Route path={'/cars'} render={() => <Cars/>}/>
                <Route path={'/create-car'} render={() => <Form/>}/>
                <Route path={'/update-car'} render={()=><SelectedCars/>}/>
            </div>
        </Router>
    );
}