import { useState } from "react";
import Post from "./Post";
import styles from "./PostList.module.css";
import NewPost from "./NewPost";
import Modal from "./Modal";

function PostList() {
  const [modalIsVisible, setModalIsVisible] = useState(true);
  const [enteredBody, setEnteredBody] = useState("Please enter the text");
  const [enteredAuthor, setEnteredAuthor] = useState("Your name");

  const hideModalHandler = () => {
    setModalIsVisible(false);
  };

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
      {modalIsVisible && (
        <Modal onClose={hideModalHandler}>
          <NewPost
            onBodyChange={bodyChangeHandler}
            onNameChange={nameChangeHandler}
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