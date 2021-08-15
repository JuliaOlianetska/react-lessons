export default function Post({postOfUser, buttonUser}) {

    const onClickButton = () => {
        buttonUser(postOfUser);
    }
        return (

    <div>

        {postOfUser.id} {postOfUser.title}

    </div>
  );
}