import HeaderSection from "./components/HeaderSection";
import CardContainer from "./components/CardContainer";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [changeBtnText, setChangeBtnText] = useState(false);
  const [editTodo, setEditTodo] = useState();

  return (
    <>
      <HeaderSection
        editTodo={editTodo}
        setEditTodo={setEditTodo}
        setChangeBtnText={setChangeBtnText}
        changeBtnText={changeBtnText}
        input={input}
        setInput={setInput}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <CardContainer
        setEditTodo={setEditTodo}
        changeBtnText={changeBtnText}
        setChangeBtnText={setChangeBtnText}
        todoList={todoList}
        setTodoList={setTodoList}
        setInput={setInput}
      />
    </>
  );
};

export default App;
