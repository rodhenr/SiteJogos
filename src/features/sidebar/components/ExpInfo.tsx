import { useEffect, useRef, useState } from "react";

import styles from "../styles/ExpInfo.module.scss";

interface IProps {
  exp: number;
  isModal: boolean;
  level: number;
  maxExpLevel: string;
}

function ExpInfo({ exp, isModal, level, maxExpLevel }: IProps) {
  const componentRef = useRef<HTMLDivElement>(null);
  const [expWidth, setExpWidth] = useState<number>(0);

  useEffect(() => {
    if (componentRef.current) {
      setExpWidth(componentRef.current.offsetWidth);
    }
  }, []);

  const widthUserExp = isNaN(exp / Number(maxExpLevel))
    ? 0
    : (exp / Number(maxExpLevel)) * expWidth;

  return (
    <div className={styles.container} ref={componentRef}>
      <div className={isModal ? `${styles.info} ${styles.modal}` : styles.info}>
        <p>Nível {level}</p>
        <p>
          {exp} / {maxExpLevel}
        </p>
      </div>
      <div
        className={isModal ? `${styles.expBar} ${styles.modal}` : styles.expBar}
      >
        <div className={styles.exp} style={{ width: widthUserExp }} />
      </div>
    </div>
  );
}

export default ExpInfo;
