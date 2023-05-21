import { useLoaderData } from "react-router-dom";
import Post from "./Post";
import styles from "./PostList.module.css";

function PostList() {
  const posts = useLoaderData();

  // const addPostHandler = async (postData) => {
  //   await fetch("http://localhost:8080/posts", {
  //     method: "POST",
  //     body: JSON.stringify(postData),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });

  //   setPosts((prevPosts) => [postData, ...prevPosts]);
  // };

  // const deletePostHandler = async (id) => {
  //   await fetch(`http://localhost:8080/posts/${id}`, {
  //     method: "DELETE",
  //   });

  //   setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
  // };

  return (
    <>
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post
              key={post.id}
              index={post.id}
              // onDeletePost={deletePostHandler}
              author={post.author}
              body={post.body}
            />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "#fff" }}>
          <h2>There are no posts yet.</h2>
          <p>Be the first one to post!</p>
        </div>
      )}
    </>
  );
}

export default PostList;
