import styles from "../../styles/components/Message.module.scss";

interface IProps {
  notRead: number;
}

function Message({ notRead }: IProps) {
  return (
    <div className={styles.container}>
      <img
        src="https://i.pinimg.com/originals/ba/b5/fe/bab5fe8516e2eead05dcbcb0fe78c102.jpg"
        alt="user avatar"
        className={styles.avatar}
      />
      <p>nome</p>
      {notRead > 0 ? (
        <div className={styles.notRead}>
          <p>{notRead}</p>
        </div>
      ) : (
        <div className={styles.read}></div>
      )}
    </div>
  );
}

export default Message;
