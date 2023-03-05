import styles from "../../styles/components/Message.module.scss";

interface IProps {
  notRead: number;
  userName: string;
}

function Message({ notRead, userName }: IProps) {
  return (
    <div className={styles.container}>
      <div className={styles.userInfo}>
        <img
          src="https://i.pinimg.com/originals/ba/b5/fe/bab5fe8516e2eead05dcbcb0fe78c102.jpg"
          alt="user avatar"
          className={styles.avatar}
        />
        <p>{userName}</p>
      </div>

      {notRead > 0 && (
        <div className={styles.notRead}>
          <p>{notRead}</p>
        </div>
      )}
    </div>
  );
}

export default Message;
