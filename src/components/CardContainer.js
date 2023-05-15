import Card from "./Card";
import styles from "./CardContainer.module.css";

const CardContainer = () => {
  return (
    <>
      <div className={styles.card_container}>
        <Card />
      </div>
    </>
  );
};

export default CardContainer;
