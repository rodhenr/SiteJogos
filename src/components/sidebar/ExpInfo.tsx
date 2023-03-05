import React from "react";
import styles from "../../styles/components/ExpInfo.module.scss";

function ExpInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <p>Nível 29</p>
        <p>1500/13500</p>
      </div>
      <div className={styles.expBar}>
        <div className={styles.exp} style={{ width: "30px" }}></div>
      </div>
    </div>
  );
}

export default ExpInfo;
