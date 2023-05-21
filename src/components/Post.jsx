import React, { useState } from "react";
import styles from "./Post.module.css";
import { MdOutlineCancel } from "react-icons/md";

function Post(props) {
  const deletePostHandler = () => {
    props.onDeletePost(props.id);
  };

  return (
    <>
      <li className={styles.post}>
        <p className={styles.author}>{props.author}</p>
        <button className={styles.button} onClick={deletePostHandler}>
          <MdOutlineCancel />
        </button>
        <p className={styles.text}>{props.body}</p>
      </li>
    </>
  );
}

export default Post;
