export default function Post(buttonUser, postOfUser) {
    const onClickButton = () => {
        buttonUser(postOfUser)
    }
        return (

    <div>
        {postOfUser.id}

    </div>
  );
}