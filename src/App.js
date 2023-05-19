import HeaderSection from "./components/HeaderSection";
import CardContainer from "./components/CardContainer";
import { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState([]);

  return (
    <>
      <HeaderSection
        input={input}
        setInput={setInput}
        todoList={todoList}
        setTodoList={setTodoList}
      />
      <CardContainer todoList={todoList} setTodoList={setTodoList} />
    </>
  );
};

export default App;
