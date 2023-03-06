import Title from "./Title";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import styles from "./styles/Recent.module.scss";
import RecentItem from "./RecentItem";

function Recent() {
  const fakeData = [
    {
      time: "04/03/2023 12:22",
      game: "JOGO DA VELHA",
      user: "RODRIGO HENRIQUE",
      result: "VITÓRIA",
    },
    {
      time: "04/03/2023 12:22",
      game: "YAHTZEE",
      user: "OUTRO USUÁRIO",
      result: "DERROTA",
    },
    {
      time: "04/03/2023 12:22",
      game: "UNO",
      user: "UM USUÁRIO",
      result: "VITÓRIA",
    },
    {
      time: "04/03/2023 12:22",
      game: "JOKENPO",
      user: "OUTRO OUTRO",
      result: "DERROTA",
    },
  ];

  return (
    <div className={styles.container}>
      <Title title={"PARTIDAS RECENTES"} />
      <div className={styles.tableContainer}>
        <div className={styles.header}>
          <p>DATA/HORA</p>
          <p>JOGO</p>
          <p>USUÁRIO</p>
          <p>RESULTADO</p>
        </div>
        <div className={styles.items}>
          {fakeData.map((item) => {
            return (
              <RecentItem
                time={item.time}
                game={item.game}
                user={item.user}
                result={item.result}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Recent;
