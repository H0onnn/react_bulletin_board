import classes from "./NewPost.module.css";
import { useState } from "react";

function NewPost({ onCancel, onAddPost }) {
  const [enteredBody, setEnteredBody] = useState("Please enter the text");
  const [enteredAuthor, setEnteredAuthor] = useState("Your name");

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };

  const nameChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const postData = {
      body: enteredBody,
      author: enteredAuthor,
    };
    onAddPost(postData);
    onCancel();
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={bodyChangeHandler} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={nameChangeHandler} />
      </p>
      <p className={classes.actions}>
        {/* form의 button 타입을 button으로 지정할 경우 폼이 제출되는걸 방지함*/}
        <button type="button" onClick={onCancel}>
          Cancel
        </button>{" "}
        <button>Submit</button>
      </p>
    </form>
  );
}

export default NewPost;
