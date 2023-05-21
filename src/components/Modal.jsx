import styles from "./Modal.module.css";
import { useNavigate } from "react-router-dom";

function Modal({ children }) {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate(".."); // navigate에 '..'를 경로로 지정하면 터미널에서 cd .. 명령어를 실행한 것과 같다. (한 단계 위로)
  };

  return (
    <>
      <div className={styles.backdrop} onClick={closeHandler} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
}

export default Modal;
