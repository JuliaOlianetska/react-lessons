import "../css.css"

export default function Company(props) {
    let {name, catchPhrase, bs} = props;

    return (
        <div className={"company"}>
            <h4>Company:</h4>
            <p>{name}</p>
            <p>{catchPhrase}</p>
            <p>{bs}</p>
        </div>
    );
}