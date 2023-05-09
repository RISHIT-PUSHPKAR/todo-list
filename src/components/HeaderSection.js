import styles from "./HeaderSection.module.css";
import React, { useReducer } from "react";

function inputReducer(state, action) {
  switch (action.type) {
    case "inputText":
      return { value: action.val, valid: action.valid };
    default:
      return { value: "", valid: false };
  }
}

const HeaderSection = (props) => {
  const [inputState, inputDispatch] = useReducer(inputReducer, {
    value: "",
    valid: true,
  });

  const collectInputHandler = (e) => {
    inputDispatch({
      type: "inputText",
      val: e.target.value,
      valid: e.target.value.trim().length > 0,
    });
  };

  const addTodoHandler = () => {
    if (inputState.value.length > 0 && inputState.valid) {
      props.getData(inputState.value);
      inputDispatch({ type: "inputText", val: "", valid: true });
    } else {
      inputDispatch({ type: "inputText", val: "", valid: false });
    }
  };

  return (
    <>
      <div className={styles.HeaderContainer}>
        <h1 className={styles.logo}>todo</h1>
        <input
          type="text"
          value={inputState.value}
          onChange={collectInputHandler}
          className={styles.headerInput}
          placeholder="Enter Your Todos..."
          style={{
            borderColor: !inputState.valid ? "red" : "#1749d4",
            boxShadow: !inputState.valid ? "0.5px 0.5px 2px 1px red" : "none",
          }}
          onFocus={() => {
            inputDispatch({
              type: "inputText",
              val: inputState.value,
              valid: true,
            });
          }}
        />
        <button
          type="button"
          className={styles.addBtn}
          onClick={addTodoHandler}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default HeaderSection;
