import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {
  return (
    <div>
    <Users/>
<Posts/>
        <h4>Comments:</h4>
        <Comments/>
    </div>
  );
}