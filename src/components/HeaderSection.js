import styles from "./HeaderSection.module.css";
import { v4 as uuidv4 } from "uuid";

const HeaderSection = ({ input, setInput, setTodoList }) => {
  const inputHandler = (e) => setInput(e.target.value);
  const submitHandler = (event) => {
    event.preventDefault();
    setTodoList((preTodo) => {
      return [
        ...preTodo,
        { id: uuidv4(), title: input, checked: false, edit: false },
      ];
    });
    setInput(() => "");
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
            required
          />
        </li>
        <li className={styles.addBtn_container}>
          <button type="submit" className={styles.addBtn}>
            Add
          </button>
        </li>
      </ul>
    </form>
  );
};

export default HeaderSection;
