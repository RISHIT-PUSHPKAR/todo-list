import styles from "./Card.module.css";
import { BiPencil } from "react-icons/bi";
import { v4 as uuidv4 } from "uuid";
import { RxCross2 } from "react-icons/rx";

const Card = ({
  setChangeBtnText,
  setEditTodo,
  changeBtnText,
  setInput,
  todo,
  setTodoList,
  todoList,
}) => {
  const deleteHandler = (todo) => {
    setTodoList(todoList.filter((obj) => obj.id !== todo.id));
  };

  const checkboxInputHandler = (activeTodo) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === activeTodo.id) {
          return { ...todo, checked: !todo.checked };
        } else {
          return todo;
        }
      })
    );
  };

  const editHandler = (todo) => {
    if (changeBtnText === false) {
      todo.edit = true;
      todoList.map((obj) => {
        if (obj.id === todo.id) {
          setInput(obj.title);
          setChangeBtnText(true);
          setEditTodo(todo.id);
        }
        return 0;
      });
    }
  };

  const checkboxId = `cbx-${uuidv4()}`;
  return (
    <>
      <div
        className="container col-10 col-lg-7 col-xl-5 d-flex border border-secondary rounded-3
        py-3 px-3 mb-4 d-flex justify-centent-center align-items-center todoCard"
      >
        <div className="checkboxContainer d-flex h-100 ms-2 ">
          <div className="container px-0">
            <input
              type="checkbox"
              id={checkboxId}
              onClick={() => checkboxInputHandler(todo)}
              className={`${styles.checkbox} ${
                todo.title.length > 30
                  ? "align-self-start"
                  : "align-self-center"
              } ${todo.title.length > 30 ? "mt-2" : "p-0"} d-none `}
            />
            <label className="check" htmlFor={checkboxId}>
              <svg viewBox="0 0 18 18" height="28px" width="28px">
                <path d="M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z"></path>
                <polyline points="1 9 7 14 15 4"></polyline>
              </svg>
            </label>
          </div>
        </div>

        <div
          className={
            todo.checked
              ? "text-decoration-line-through opacity-25 flex-grow-1 ms-3 fs-2 "
              : "flex-grow-1 align-self-center ms-3 fs-2"
          }
          style={{ wordBreak: "break-word" }}
        >
          {todo.title}
        </div>

        <div className={`d-flex  h-100`}>
          <BiPencil
            className={`${
              todo.edit
                ? `${styles.pencilIconActive} ${
                    todo.title.length > 30
                      ? "align-self-start"
                      : "align-self-center"
                  } ${todo.title.length > 30 ? "mt-2" : "p-0"}`
                : `${styles.pencilIcon} ${
                    todo.title.length > 30
                      ? "align-self-start"
                      : "align-self-center"
                  } ${todo.title.length > 30 ? "mt-2" : "p-0"}`
            }`}
            onClick={() => editHandler(todo)}
          />
          <RxCross2
            className={`${styles.deleteIcon} ${
              todo.title.length > 30 ? "align-self-start" : "align-self-center"
            } ${todo.title.length > 30 ? "mt-2" : "p-0"}`}
            onClick={() => deleteHandler(todo)}
          />
        </div>
      </div>
    </>
  );
};

export default Card;
