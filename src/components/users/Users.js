import {useEffect, useState} from "react";
import {getPostsOfUser, getUsers} from "../../service/user.service";
import User from "../user/User";
import Post from "../post/Post";

export default function Users() {

   let [users, setUsers] = useState([]);
let [user, setUser] = useState({});
let [posts, setPosts] = useState([]);
let [post, setPost] = useState({});

    useEffect(() => {
getUsers().then(value => setUsers([...value]))
    }, [])


const buttonUser = (userDet) => {
        setUser({...userDet});
            getPostsOfUser(userDet.id).then(value => {
                setPosts([...value]);
            })
    }

    return (
    <div>
        <div>{
            users.map(itemUser => <User key={itemUser.id} someUser={itemUser}
                                        buttonUser={buttonUser}
            />)
        }
        </div>
        <div>
            {
                posts.map(onePost => <Post postOfUser={onePost}
                buttonUser={buttonUser}
                />)

            }
        </div>

        {user && (<div>
            {JSON.stringify(user.name)}
            {JSON.stringify(user.username)}
            {JSON.stringify(post.id)}
        </div>)}



    </div>
  );
}