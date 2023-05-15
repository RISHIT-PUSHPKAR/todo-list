import styles from "./Card.module.css";

const Card = () => {
  return (
    <>
      <div className="card">
        <input type="checkbox" />
        <div className="todo-text"></div>
        <i class="fa-regular fa-trash"></i>
        <i></i>
      </div>
    </>
  );
};

export default Card;
