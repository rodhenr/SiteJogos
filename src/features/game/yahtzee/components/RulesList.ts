import { IRules } from "./Rules";

export const rulesList: IRules[] = [
  {
    ruleName: "ruleSum_all",
    name: "SOMA",
    description: "SOMA DE TODOS OS DADOS",
  },
  { ruleName: "ruleSum_one", name: "UM", description: "1 PONTO POR CADA 1" },
  { ruleName: "ruleSum_two", name: "DOIS", description: "2 PONTO POR CADA 2" },
  {
    ruleName: "ruleSum_three",
    name: "TRÊS",
    description: "3 PONTO POR CADA 3",
  },
  {
    ruleName: "ruleSum_four",
    name: "QUATRO",
    description: "4 PONTO POR CADA 4",
  },
  {
    ruleName: "ruleSum_five",
    name: "CINCO",
    description: "5 PONTO POR CADA 5",
  },
  { ruleName: "ruleSum_six", name: "SEIS", description: "6 PONTO POR CADA 6" },
  {
    ruleName: "ruleSame_three",
    name: "3 DE UM TIPO",
    description: "SOMA DOS DADOS",
  },
  {
    ruleName: "ruleSame_four",
    name: "4 DE UM TIPO",
    description: "SOMA DOS DADOS",
  },
  { ruleName: "ruleRow_four", name: "4 SEGUIDOS", description: "30 PONTOS" },
  { ruleName: "ruleRow_five", name: "5 SEGUIDOS", description: "40 PONTOS" },
  { ruleName: "rule_yahtzee", name: "YAHTZEE", description: "50 PONTOS" },
];
