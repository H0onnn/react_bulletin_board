import { useState } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);

  const addPostHandler = (postData) => {
    setPosts((prevPosts) => [postData, ...prevPosts]);
  };

  const deletePostHandler = (index) => {
    setPosts((prevPosts) => prevPosts.filter((post, i) => i !== index));
  };

  return (
    <>
      {/* modalIsVisible의 값이 true일 때 모달창 출력 */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost onCancel={onStopPosting} onAddPost={addPostHandler} />
        </Modal>
      )}
      {posts.length > 0 && (
        <ul className={styles.posts}>
          {posts.map((post, index) => (
            <Post
              key={index}
              index={index}
              onDeletePost={deletePostHandler}
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
