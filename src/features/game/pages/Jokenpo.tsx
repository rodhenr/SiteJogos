import GameLayout from "../../../shared/layout/GameLayout";

function Jokenpo() {
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
    }}

  return (
    <GameLayout gameName={"JoKenPo"} rulesList={[""]} sizes={sizes}>
      <div>JOGO</div>
    </GameLayout>
  );
}

export default Jokenpo;
