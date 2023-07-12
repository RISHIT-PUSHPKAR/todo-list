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
    <div className=" container py-5 col-12  col-lg-9  d-flex justify-content-center">
      <div className=" px-4 col-11 d-flex flex-wrap justify-content-center">
        <div className="col col-2 me-md-4">
          <h1 className="display-2 fw-medium">todo</h1>
        </div>
        <form
          onSubmit={submitHandler}
          className="d-flex justify-content-center"
        >
          <input
            className=" fs-2 form-control border-1 border-primary "
            type="text"
            placeholder=" Enter Your Todos..."
            value={input}
            onChange={inputHandler}
            required
          />

          <button
            type="submit"
            className="btn btn-primary btn-lg px-5 ms-4 fs-1"
          >
            {changeBtnText ? "Save" : "Add"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default HeaderSection;
