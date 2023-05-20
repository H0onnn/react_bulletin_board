import classes from "./NewPost.module.css";

function NewPost({ onBodyChange, onNameChange, onCancel }) {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={3} onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="name">Your name</label>
        <input type="text" id="name" required onChange={onNameChange} />
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
