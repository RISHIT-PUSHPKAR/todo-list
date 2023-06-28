import styles from "./HeaderSection.module.css";
import { v4 as uuidv4 } from "uuid";

const HeaderSection = ({
  editTodo,
  setEditTodo,
  setChangeBtnText,
  changeBtnText,
  input,
  setInput,
  todoList,
  setTodoList,
}) => {
  const inputHandler = (e) => setInput(e.target.value);
  console.log(editTodo);
  const submitHandler = (event) => {
    event.preventDefault();
    if (changeBtnText === false) {
      setTodoList((preTodo) => {
        return [
          {
            id: uuidv4(),
            title: input,
            checked: false,
            edit: setEditTodo(false),
          },
          ...preTodo,
        ];
      });
    } else {
      setTodoList(
        todoList.map((obj) => {
          if (obj.id === editTodo) {
            return { ...obj, title: input, edit: setEditTodo(true) };
          }
          return obj;
        })
      );
    }

    setInput("");
    setChangeBtnText(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <ul>
        <li className={styles.logo}>todo</li>
        <li className={styles.input_container}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Your Todos..."
            value={input}
            onChange={inputHandler}
            maxLength={16}
            required
          />
        </li>
        <li className={styles.addBtn_container}>
          <button type="submit" className={styles.addBtn}>
            {changeBtnText ? "Save" : "Add"}
          </button>
        </li>
      </ul>
    </form>
  );
};

export default HeaderSection;
