import GameLayout from "../../../shared/layout/GameLayout";
import Game from "../tictactoe/index";

function TicTacToe() {
  const sizes = {
    height: {
      mobile: "400px",
      tablet: "100%",
      laptop: "100%",
      desktop: "100%",
      desktopLarger: "100%",
    },
    width: {
      mobile: "100%",
      tablet: "100%",
      laptop: "100%",
      desktop: "100%",
      desktopLarger: "100%",
    },
    rulesOnSide: {
      mobile: false,
      tablet: false,
      laptop: false,
      desktop: false,
      desktopLarger: false,
    },
  };

  return (
    <GameLayout rulesList={[""]} sizes={sizes}>
      <Game />
    </GameLayout>
  );
}

export default TicTacToe;
