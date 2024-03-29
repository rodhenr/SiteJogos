import GameLayout from "../../../shared/layout/GameLayout";
import Game from "../jokenpo/index";

function Jokenpo() {
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
      gameName={"JoKenPo"}
      rulesList={[
        "Cada jogador escolhe uma das três opções: pedra, papel ou tesoura. Pedra ganha da tesoura (amassando-a), tesoura ganha do papel (cortando-o) e papel ganha da pedra (cobrindo-a).",
      ]}
      sizes={sizes}
    >
      <Game />
    </GameLayout>
  );
}

export default Jokenpo;
