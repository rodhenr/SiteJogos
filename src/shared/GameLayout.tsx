import Layout from "./MainLayout";

import { v4 as uuidv4 } from "uuid";

import styles from "./styles/GameLayout.module.scss";

interface IProps {
  children: React.ReactNode;
  rules: any[];
}

function GameLayout({ children, rules }: IProps) {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.gameContainer}>{children}</div>
        <div className={styles.rulesContainer}>
          <h1>REGRAS</h1>
          <div className={styles.rules}>
            {rules.map((rule, index) => {
              return (
                <div className={styles.rule} key={uuidv4()}>
                  <p>
                    {index + 1} - {rule}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default GameLayout;
