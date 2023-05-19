import Card from "./Card";
import styles from "./CardContainer.module.css";

const CardContainer = ({ todoList, setTodoList }) => {
  console.log("aaaaaaaaaaa", todoList);
  return (
    <>
      <div className={styles.card_container}>
        {todoList.map((todo) => {
          return (
            <Card
              todo={todo.title}
              key={todo.id}
              setTodoList={setTodoList}
              todoList={todoList}
              onChange={(event) => event.preventDefault()}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardContainer;
