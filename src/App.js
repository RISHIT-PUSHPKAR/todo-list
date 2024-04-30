import { v4 as uuidv4 } from "uuid";
import CardContainer from "./components/CardContainer";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [changeBtnText, setChangeBtnText] = useState(false);
  const [editTodo, setEditTodo] = useState();

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
    <>
      <header>
        <div
          className="container py-5 header__container"
          style={{ height: "18vh" }}
        >
          <div className="d-flex justify-content-center">
            <h1 className="display-2 fw-medium">todo</h1>
          </div>
          <div className="container  d-flex  flex-wrap justify-content-center px-0">
            <div className="col-10 col-lg-7 col-xl-5">
              <form
                onSubmit={submitHandler}
                className="d-flex justify-content-center "
              >
                <input
                  className=" fs-2 form-control border-1 border-primary rounded-end-0 "
                  type="text"
                  placeholder=" Enter Your Todos..."
                  value={input}
                  onChange={inputHandler}
                  required
                />
                <button
                  type="submit"
                  className="btn btn-primary btn-lg fs-1 rounded-start-0"
                >
                  {changeBtnText ? "Save" : "Add"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </header>
      <main>
        <CardContainer
          setEditTodo={setEditTodo}
          changeBtnText={changeBtnText}
          setChangeBtnText={setChangeBtnText}
          todoList={todoList}
          setTodoList={setTodoList}
          setInput={setInput}
        />
      </main>
    </>
  );
};

export default App;
