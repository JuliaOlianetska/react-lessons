import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";




export default function User({eachUser, history}) {
    let navigate = () => {
        history.push('/users-page/' + eachUser.id, eachUser)
    }

  return (
    <div>
        {eachUser.name} - <button onClick={navigate}>user details</button>



    </div>
  );
}