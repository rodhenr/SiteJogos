import styles from "./styles/Highlighted.module.scss";
import Title from "./Title";

function Highlighted() {
  return (
    <div className={styles.container}>
      <Title title={"EM DESTAQUE"} />
    </div>
  );
}

export default Highlighted;
