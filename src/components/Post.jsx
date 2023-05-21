import { Link } from "react-router-dom";
import styles from "./Post.module.css";
import { MdOutlineCancel } from "react-icons/md";

function Post(props) {
  const deletePostHandler = () => {
    props.onDeletePost(props.id);
  };

  return (
    <>
      <li className={styles.post}>
        <Link to={props.id}>
          <p className={styles.author}>{props.author}</p>
          <button className={styles.button} onClick={deletePostHandler}>
            <MdOutlineCancel />
          </button>
          <p className={styles.text}>{props.body}</p>
        </Link>
      </li>
    </>
  );
}

export default Post;
