import styles from "./AnimatedComponent.module.scss";

function AnimatedComponent() {
  return (
    <div className={styles.container}>
      <div className={styles["circle-small"]}></div>
      <div className={styles["circle-medium"]}></div>
      <div className={styles["circle-large"]}></div>
    </div>
  );
}

export default AnimatedComponent;
