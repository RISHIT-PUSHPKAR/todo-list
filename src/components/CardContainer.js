import Card from "./Card";
import { Reorder, useDragControls, AnimatePresence } from "framer-motion";

const CardContainer = ({
  setChangeBtnText,
  setEditTodo,
  changeBtnText,
  todoList,
  setTodoList,
  setInput,
}) => {
  const controls = useDragControls();
  return (
    <>
      <div
        className="container justify-content-center"
        style={{ height: "80vh", overflowY: "scroll" }}
      >
        <Reorder.Group
          axis="y"
          values={todoList}
          onReorder={setTodoList}
          className="list-unstyled"
        >
          <AnimatePresence>
            {todoList.map((todo) => {
              return (
                <Reorder.Item
                  value={todo}
                  key={todo.id}
                  dragListener={true}
                  dragControls={controls}
                >
                  <div className="col-12">
                    <Card
                      dragControl={controls}
                      setEditTodo={setEditTodo}
                      changeBtnText={changeBtnText}
                      setChangeBtnText={setChangeBtnText}
                      setInput={setInput}
                      todo={todo}
                      key={todo.id}
                      setTodoList={setTodoList}
                      todoList={todoList}
                      onChange={(event) => event.preventDefault()}
                    />
                  </div>
                </Reorder.Item>
              );
            })}
          </AnimatePresence>
        </Reorder.Group>
      </div>
    </>
  );
};

export default CardContainer;
