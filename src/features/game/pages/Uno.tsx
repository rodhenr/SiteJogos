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
      desktopLarge: "75%",
    },
    rulesOnSide: {
      mobile: false,
      tablet: false,
      laptop: false,
      desktop: false,
      desktopLarge: true,
    },
  };

  return (
    <GameLayout
      gameName={"UNO"}
      rulesList={[
        "O objetivo é não ser o último jogador a ficar sem cartas na mão.",
        "Cada jogador recebe cinco cartas no início do jogo. O restante das cartas são colocadas em um baralho.",
        "Os jogadores jogam uma carta que corresponde ao número, cor ou símbolo da carta no topo do baralho. Por exemplo, se a carta do topo é um 7 azul, um jogador pode jogar um 7 de qualquer cor ou uma carta azul de qualquer número.",
        "Se um jogador não tiver uma carta que corresponda à carta do topo do baralho, ele deve pescar uma carta do baralho.",
        "Existem cartas especiais que podem ser jogadas a qualquer momento, independentemente da carta do topo do baralho.",
      ]}
      sizes={sizes}
    >
      <Game />
    </GameLayout>
  );
}

export default Uno;
