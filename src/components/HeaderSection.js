import styles from "./HeaderSection.module.css";

const HeaderSection = () => {
  return (
    <nav>
      <ul>
        <li className={styles.logo}>todo</li>
        <li className={styles.input_container}>
          <input
            className={styles.input}
            type="text"
            placeholder="Enter Your Todo..."
          />
        </li>
        <li className={styles.addBtn_container}>
          <button className={styles.addBtn}>Add</button>
        </li>
      </ul>
    </nav>
  );
};

export default HeaderSection;
