import ExpInfo from "./ExpInfo";
import styles from "../../styles/components/UserInfo.module.scss";

function UserInfo() {
  return (
    <div className={styles.container}>
      <p className={styles.userName}>RODRIGO HENRIQUE</p>
      <img
        src="https://i.pinimg.com/originals/ba/b5/fe/bab5fe8516e2eead05dcbcb0fe78c102.jpg"
        alt="user avatar"
        className={styles.avatar}
        style={{ border: "2px solid green" }}
      />
      <ExpInfo />
    </div>
  );
}

export default UserInfo;
