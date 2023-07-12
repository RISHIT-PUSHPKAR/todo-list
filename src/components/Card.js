import styles from "./Card.module.css";
import { BiPencil } from "react-icons/bi";
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

  const checkboxInputHandler = (todo) => {
    setTodoList(
      todoList.map((element) => {
        if (element.id === todo.id) {
          return { ...element, checked: !todo.checked };
        }
        return element;
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
  return (
    <>
      <div
        className="container col-10 col-lg-7 col-xl-5 d-flex border border-secondary rounded-3
        py-3 px-3 mb-4"
      >
        <div className="checkboxContainer d-flex h-100 ms-2">
          <input
            type="checkbox"
            className={`${styles.checkbox} ${
              todo.title.length > 30 ? "align-self-start" : "align-self-center"
            } ${todo.title.length > 30 ? "mt-2" : "p-0"} `}
            onClick={() => checkboxInputHandler(todo)}
          />
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
