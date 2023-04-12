import { useEffect, useState } from "react";

import { Box } from "@mui/material";

import GameSquares from "./components/GameSquares";
import EndMessage from "./components/EndMessage";
import Restart from "./components/Restart";

function Index() {
  const [quadrado, setQuadrado] = useState(Array(9).fill(""));
  const [over, setOver] = useState(false);
  const [turno, setTurno] = useState(0);
  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    const regras = (simbolo: string) => {
      if (
        (quadrado[0] === simbolo &&
          ((quadrado[1] === simbolo && quadrado[2] === simbolo) ||
            (quadrado[3] === simbolo && quadrado[6] === simbolo))) ||
        (quadrado[4] === simbolo &&
          ((quadrado[0] === simbolo && quadrado[8] === simbolo) ||
            (quadrado[1] === simbolo && quadrado[7] === simbolo) ||
            (quadrado[2] === simbolo && quadrado[6] === simbolo) ||
            (quadrado[3] === simbolo && quadrado[5] === simbolo))) ||
        (quadrado[8] === simbolo &&
          ((quadrado[2] === simbolo && quadrado[5] === simbolo) ||
            (quadrado[6] === simbolo && quadrado[7] === simbolo)))
      ) {
        setOver(true);
        setMensagem(`O vencedor foi o jogador ${simbolo === "X" ? "1" : "2"}`);
      } else {
        return;
      }
    };

    regras("X");
    regras("O");
  }, [quadrado]);

  const play = (index: number) => {
    if (quadrado[index] === "" && !over && turno % 2 === 0) {
      const newArray = quadrado.map((i, key) => (key === index ? "X" : i));
      setQuadrado(newArray);
      setTurno((prev) => prev + 1);
    } else if (quadrado[index] === "" && !over && turno % 2 === 1) {
      const newArray = quadrado.map((i, key) => (key === index ? "O" : i));
      setQuadrado(newArray);
      setTurno((prev) => prev + 1);
    }
  };

  return (
    <Box
      alignItems={"center"}
      boxSizing={"border-box"}
      display={"flex"}
      flex={1}
      flexDirection={"column"}
      height={"100%"}
      justifyItems={"center"}
      p={1}
    >
      <GameSquares itens={quadrado} play={play} />
      <EndMessage info={mensagem} turno={turno} over={over} />
      <Restart turno={turno} over={over} />
    </Box>
  );
}

export default Index;
