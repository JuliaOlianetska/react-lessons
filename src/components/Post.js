export default function Post({onePost}) {
    return (
        <div>
            <h4>id: {onePost.id}, title: {onePost.title}</h4>
            <p>{onePost.body}</p>
        </div>
    );
}