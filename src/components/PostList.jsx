import { useState } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList({ isPosting, onStopPosting }) {
  const [enteredBody, setEnteredBody] = useState("Please enter the text");
  const [enteredAuthor, setEnteredAuthor] = useState("Your name");

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };

  const nameChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  //   let modalContent;

  //   if (modalIsVisible) {
  //     modalContent = (
  //       <Modal onClose={hideModalHandler}>
  //         <NewPost
  //           onBodyChange={bodyChangeHandler}
  //           onNameChange={nameChangeHandler}
  //         />
  //       </Modal>
  //     );
  //   }

  return (
    <>
      {/* modalIsVisible의 값이 true일 때 모달창 출력 */}
      {isPosting && (
        <Modal onClose={onStopPosting}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onNameChange={nameChangeHandler}
            onCancel={onStopPosting}
          />
        </Modal>
      )}
      <ul className={styles.posts}>
        <Post author={enteredAuthor} body={enteredBody} />
        <Post author="SE" />
      </ul>
    </>
  );
}

export default PostList;
