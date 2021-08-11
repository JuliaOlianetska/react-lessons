import Geo from "../geo/Geo";
import "../cw-lesson1.css"

export default function Address(props) {
    let {street, suite, city, zipcode, geo} = props;

    return (
        <div className={"address"}>
            <h4>Address:</h4>
            <p>{street}</p>
            <p>{suite}</p>
            <p>{city}</p>
            <p>{zipcode}</p>
            <Geo {...geo}/>
        </div>
    );
}