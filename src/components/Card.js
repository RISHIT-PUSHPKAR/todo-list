import styles from "./Card.module.css";
import { HiOutlineTrash } from "react-icons/hi2";
import { FiEdit } from "react-icons/fi";

const Card = ({ setTodoList, todoList }) => {
  const deleteHandler = () => {
    // setTodoList(() => {
    //   todoList.filter((obj) => obj.id !== id);
    // });
  };

  return (
    <>
      <div className={styles.card}>
        <input type="checkbox" className={styles.checkbox} />
        <div className={styles.todo_text}>{todo.title}</div>
        <FiEdit className={styles.edit} />
        <HiOutlineTrash className={styles.trashIcon} onClick={deleteHandler} />
      </div>
    </>
  );
};

export default Card;
