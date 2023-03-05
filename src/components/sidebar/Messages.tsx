import styles from "../../styles/components/Messages.module.scss";
import Message from "./Message";

function Messages() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>MENSAGENS</p>
      <div className={styles.messages}>
        <div>
          <Message notRead={0} />
          <Message notRead={2} />
          <Message notRead={1} />
          <Message notRead={4} />
        </div>
        <div className={styles.allMessages}>
          <p>TODAS MENSAGENS</p>
        </div>
      </div>
    </div>
  );
}

export default Messages;
