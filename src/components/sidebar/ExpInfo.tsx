import React from "react";
import styles from "./styles/ExpInfo.module.scss";

interface IProps {
  exp: number;
  maxExpLevel: number;
}

function ExpInfo({ exp, maxExpLevel }: IProps) {
  const barWidth = 186;
  const barPercentage = (exp * 100) / maxExpLevel;
  const barExpWidth = (barPercentage * 100) / barWidth;

  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>Nível 29</p>
        <p>
          {exp}/{maxExpLevel}
        </p>
      </div>
      <div className={styles.expBar}>
        <div className={styles.exp} style={{ width: barExpWidth }}></div>
      </div>
    </div>
  );
}

export default ExpInfo;
