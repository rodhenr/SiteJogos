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
    <GameLayout
      gameName={"Yahtzee"}
      rulesList={[
        "Yahtzee é um jogo de dados para dois ou mais jogadores.",
        "O objetivo do jogo é marcar a maior pontuação possível em 13 rodadas.",
        "Em cada rodada, o jogador tem direito a três lançamentos de dados.",
        "O jogador pode escolher manter alguns ou todos os dados após cada lançamento e relançar os que não foram mantidos.",
        "Após o terceiro lançamento, o jogador deve escolher uma categoria na qual marcar pontos.",
        "Cada categoria tem sua própria regra para marcar pontos, e cada categoria só pode ser usada uma vez por jogo.",
        "As categorias são: As, Duques, Trincas, Quadras, Sequência Menor (1-2-3-4-5), Sequência Maior (2-3-4-5-6), Full House (uma trinca e um par), Generala (cinco dados iguais), Chance (qualquer combinação).",
        "Se o jogador não conseguir marcar pontos em nenhuma das categorias, ele deve escolher uma para marcar zero pontos.",
        "No final das 13 rodadas, o jogador com a maior pontuação total vence o jogo.",
      ]}
      sizes={sizes}
    >
      <Game />
    </GameLayout>
  );
}

export default Yahtzee;
