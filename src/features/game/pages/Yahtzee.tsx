import GameLayout from "../../../shared/layout/GameLayout";

function Yahtzee() {
  const sizes = {
    height: {
      mobile: "100%",
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
      <div>JOGO</div>
    </GameLayout>
  );
}

export default Yahtzee;
