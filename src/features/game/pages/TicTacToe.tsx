import GameLayout from "../../../shared/layout/GameLayout";
import Game from "../tictactoe/index";

function TicTacToe() {
  const sizes = {
    height: {
      mobile: "400px",
      tablet: "450px",
      laptop: "550px",
      desktop: "100%",
      desktopLarge: "100%",
    },
    width: {
      mobile: "100%",
      tablet: "100%",
      laptop: "100%",
      desktop: "50%",
      desktopLarge: "50%",
    },
    rulesOnSide: {
      mobile: false,
      tablet: false,
      laptop: false,
      desktop: true,
      desktopLarge: true,
    },
  };

  return (
    <GameLayout
      gameName={"Jogo da Velha"}
      rulesList={[
        "O jogador possui uma marcação de xis (X) e o CPU possui uma marcação de círculo (O)",
        "Os jogadores jogam alternadamente, uma marcação por vez, numa lacuna que esteja vazia",
        "Vence o jogador que conseguir formar primeiro uma linha com três símbolos iguais, seja ela na horizontal, vertical ou diagonal",
      ]}
      sizes={sizes}
    >
      <Game />
    </GameLayout>
  );
}

export default TicTacToe;
