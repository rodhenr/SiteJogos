import styles from "./styles/ExpInfo.module.scss";

interface IProps {
  exp: number;
  isModal: boolean;
  level: number;
  maxExpLevel: number;
}

function ExpInfo({ exp, isModal, level, maxExpLevel }: IProps) {
  const barExpWidth = (exp / maxExpLevel) * 220; //width expBar

  return (
    <div className={styles.container}>
      <div className={isModal ? `${styles.info} ${styles.modal}` : styles.info}>
        <p>Nível {level}</p>
        <p>
          {exp} / {maxExpLevel}
        </p>
      </div>
      <div
        className={isModal ? `${styles.expBar} ${styles.modal}` : styles.expBar}
      >
        <div className={styles.exp} style={{ width: barExpWidth }} />
      </div>
    </div>
  );
}

export default ExpInfo;
