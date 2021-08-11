import "../cw-lesson1.css"

export default function Geo(props) {
    let {lat, lng} = props;
    return (
        <div className={'geo'}>
            <p>lat: {lat}, lng: {lng}</p>

        </div>
    );
}