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
    <nav>
      <div className="container p-5 ">
        <div className="row flex-lg-row flex-column align-items-center">
          <div className="col col-3">
            <h1 className="display-2 fw-medium pb-3">todo</h1>
          </div>

          <form
            onSubmit={submitHandler}
            className="col d-flex justify-content-center justify-content-lg-start"
          >
            <input
              className={`fs-1 form-control border-1 border-primary`}
              style={{ width: "21rem" }}
              type="text"
              placeholder=" Enter Your Todos..."
              value={input}
              onChange={inputHandler}
              required
            />
            <button
              type="submit"
              className="btn btn-primary btn-lg px-5 py-auto ms-5 fs-2 fs-lg-1"
            >
              {changeBtnText ? "Save" : "Add"}
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default HeaderSection;
