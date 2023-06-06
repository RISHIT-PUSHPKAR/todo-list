import Card from "./Card";
import styles from "./CardContainer.module.css";

const CardContainer = ({
  setChangeBtnText,
  setEditTodo,
  changeBtnText,
  todoList,
  setTodoList,
  setInput,
}) => {
  return (
    <>
      <div className={styles.card_container}>
        {todoList.map((todo) => {
          return (
            <Card
              setEditTodo={setEditTodo}
              changeBtnText={changeBtnText}
              setChangeBtnText={setChangeBtnText}
              setInput={setInput}
              todo={todo}
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
