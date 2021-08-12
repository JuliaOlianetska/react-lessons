export default function Post({userPost}) {
  return (
    <div>
      <p>{userPost.id} - {userPost.title} {userPost.body}</p>
    </div>
  );
}