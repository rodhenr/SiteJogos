import styles from "./styles/ExpInfo.module.scss";

interface IProps {
  exp: number;
  level: number;
  maxExpLevel: number;
}

function ExpInfo({ exp, level, maxExpLevel }: IProps) {
  const barExpWidth = (exp / maxExpLevel) * 220; //width expBar

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>Nível {level}</p>
        <p>
          {exp} / {maxExpLevel}
        </p>
      </div>
      <div className={styles.expBar}>
        <div className={styles.exp} style={{ width: barExpWidth }} />
      </div>
    </div>
  );
}

export default ExpInfo;
