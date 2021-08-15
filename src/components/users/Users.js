import {useEffect, useState} from "react";
import {getPostsOfUser, getUsers} from "../../service/user.service";
import User from "../user/User";
import Post from "../post/Post";
import "../style.css"


export default function Users() {

    let [users, setUsers] = useState([]);
    let [user, setUser] = useState({});
    let [posts, setPosts] = useState([]);


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
        <div className={'wrap'}>
            <div className={'users'}>{
                users.map(itemUser => <User key={itemUser.id} someUser={itemUser}
                                            buttonUser={buttonUser}
                />)

            }
            </div>

            {user && (<div className={'user-details'}>
                {JSON.stringify(user.name)}
                {JSON.stringify(user.username)}

            </div>)}

            <div className={'posts'}>{
                posts.map(postOfUser => <Post key={postOfUser.id} postOfUser={postOfUser}
                                              buttonUser={buttonUser}
                />)

            }
            </div>


        </div>
    );
}