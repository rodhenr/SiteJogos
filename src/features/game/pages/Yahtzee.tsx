import GameLayout from "../../../shared/layout/GameLayout";
import Game from "../yahtzee/index";

function Yahtzee() {
  const sizes = {
    height: {
      mobile: "100%",
      tablet: "100%",
      laptop: "100%",
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
    <GameLayout gameName={"Yahtzee"} rulesList={[""]} sizes={sizes}>
      <Game />
    </GameLayout>
  );
}

export default Yahtzee;
