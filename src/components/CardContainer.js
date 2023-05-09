import Card from "./Card";
import styles from "./CardContainer.module.css";

const CardContainer = (props) => {
  const deleteHandler = (data) => {
    props.delete(data);
  };

  console.log(props.recordedArray);
  return (
    <>
      <div className={styles.cardContainer}>
        {props.recordedArray.map((obj) => {
          console.log(obj.key);
          return (
            <Card title={obj.titleKey} delete={deleteHandler} id={obj.key} />
          );
        })}
      </div>
    </>
  );
};
export default CardContainer;
