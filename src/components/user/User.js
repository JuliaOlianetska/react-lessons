export default function User({someUser, buttonUser}) {

    
    const onClickButton = () => {
        buttonUser(someUser);
    }

    return (
    <div>

            id {someUser.id}, name: {someUser.name}
            <button onClick={onClickButton}>details</button>

    </div>
  );
}