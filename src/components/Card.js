import styles from "./Card.module.css";

const Card = () => {
  return (
    <>
      <div className={styles.card}>
        <input type="checkbox" className={styles.checkbox} />
        <div className={styles.todo_text}>Todo</div>
        <i
          className={`${styles.trashIcon} fa-regular fa-trash-can`}
          style={{ color: "#dc3545" }}
        ></i>
      </div>
    </>
  );
};

export default Card;
