import styles from "./Card.module.css";
import { HiOutlineTrash } from "react-icons/hi2";
import { FiEdit } from "react-icons/fi";
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
  console.log(todo.title.length);
  return (
    <>
      <div className="container d-flex justify-content-center mb-3">
        <div className="card w-75" style={{ maxWidth: "50rem" }}>
          <div className="card-body d-flex p-2 ps-3 pe-2 ">
            <input
              type="checkbox"
              className={`${styles.checkbox}`}
              onClick={() => checkboxInputHandler(todo)}
            />

            <div
              className={todo.checked ? styles.strikethrough : styles.todo_text}
            >
              {todo.title}
            </div>
            <div className="container w-auto hstack align-self-start">
              <BiPencil
                className={
                  todo.edit ? styles.pencilIconActive : styles.pencilIcon
                }
                onClick={() => editHandler(todo)}
              />
              <RxCross2
                className={styles.deleteIcon}
                onClick={() => deleteHandler(todo)}
              />

              {/* <FiEdit
                className={todo.edit ? styles.editOn : styles.edit}
                onClick={() => editHandler(todo)}
              /> */}
              {/* <HiOutlineTrash
                className={styles.trashIcon}
                onClick={() => deleteHandler(todo)}
              /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
