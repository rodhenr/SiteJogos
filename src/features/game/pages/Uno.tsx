import GameLayout from "../../../shared/layout/GameLayout";
import Game from "../uno/index";

function Uno() {
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
      desktop: "100%",
      desktopLarge: "100%",
    },
    rulesOnSide: {
      mobile: false,
      tablet: false,
      laptop: false,
      desktop: false,
      desktopLarge: false,
    },
  };

  return (
    <GameLayout gameName={"UNO"} rulesList={[""]} sizes={sizes}>
      <Game />
    </GameLayout>
  );
}

export default Uno;
