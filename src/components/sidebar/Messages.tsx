import styles from "./styles/Messages.module.scss";
import Message from "./Message";

function Messages() {
  return (
    <div className={styles.container}>
      <p className={styles.title}>MENSAGENS</p>
      <div className={styles.messages}>
        <div className={styles.recentMessages}>
          <Message notRead={0} userName={"Rodrigo"} />
          <Message notRead={2} userName={"Usuário"} />
          <Message notRead={1} userName={"Pessoa"} />
          <Message notRead={4} userName={"Teste"} />
        </div>
        <div className={styles.allMessages}>
          <p>TODAS MENSAGENS</p>
        </div>
      </div>
    </div>
  );
}

export default Messages;
