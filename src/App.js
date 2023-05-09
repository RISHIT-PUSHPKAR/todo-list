import styles from "../src/App.module.css";
import React, { useState } from "react";
import CardContainer from "./components/CardContainer";
import HeaderSection from "./components/HeaderSection";

function App() {
  const [title, setTitle] = useState([]);

  let recordedArray;
  const getData = (data) => {
    setTitle((preData) => {
      return [{ titleKey: data, key: Math.random() }, ...preData];
    });
  };
  recordedArray = [...title];

  const deleteTodo = (data) => {
    setTitle((pre) => {
      let arrAfterDel = pre.filter((ele) => ele.key !== data);
      return arrAfterDel;
    });
  };

  console.log(recordedArray);
  return (
    <div className={styles.appContainer}>
      <HeaderSection getData={getData} />
      <CardContainer recordedArray={recordedArray} delete={deleteTodo} />
    </div>
  );
}
export default App;
