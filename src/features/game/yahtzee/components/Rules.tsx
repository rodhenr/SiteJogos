import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { useYahtzeeChooseRuleMutation } from "../../gameApiSlice";
import { resetDicesState, setYahtzeeData } from "../yahtzeeSlice";

import { Box, Typography } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

import { rulesList } from "./RulesList";

export interface IRules {
  ruleName: keyof IRulesObj;
  name: string;
  description: string;
}

export interface IRulesObj {
  ruleSum_all: number | null;
  ruleSum_one: number | null;
  ruleSum_two: number | null;
  ruleSum_three: number | null;
  ruleSum_four: number | null;
  ruleSum_five: number | null;
  ruleSum_six: number | null;
  ruleSame_three: number | null;
  ruleSame_four: number | null;
  ruleRow_four: number | null;
  ruleRow_five: number | null;
  rule_yahtzee: number | null;
}

export function Rules() {
  const dispatch = useDispatch();
  const matchID = useSelector((state: RootState) => state.yahtzee.matchID);

  const rulesObj: IRulesObj = {
    ruleSum_all: useSelector((state: RootState) => state.yahtzee.ruleSum_all),
    ruleSum_one: useSelector((state: RootState) => state.yahtzee.ruleSum_one),
    ruleSum_two: useSelector((state: RootState) => state.yahtzee.ruleSum_two),
    ruleSum_three: useSelector(
      (state: RootState) => state.yahtzee.ruleSum_three
    ),
    ruleSum_four: useSelector((state: RootState) => state.yahtzee.ruleSum_four),
    ruleSum_five: useSelector((state: RootState) => state.yahtzee.ruleSum_five),
    ruleSum_six: useSelector((state: RootState) => state.yahtzee.ruleSum_six),
    ruleSame_three: useSelector(
      (state: RootState) => state.yahtzee.ruleSame_three
    ),
    ruleSame_four: useSelector(
      (state: RootState) => state.yahtzee.ruleSame_four
    ),
    ruleRow_four: useSelector((state: RootState) => state.yahtzee.ruleRow_four),
    ruleRow_five: useSelector((state: RootState) => state.yahtzee.ruleRow_five),
    rule_yahtzee: useSelector((state: RootState) => state.yahtzee.rule_yahtzee),
  };

  const [chooseRule] = useYahtzeeChooseRuleMutation();

  const handleRuleChoice = async (ruleName: string, ruleUsed: boolean) => {
    if (ruleUsed) return;

    try {
      const data = await chooseRule({
        matchID: matchID ?? 0,
        ruleName,
      }).unwrap();

      dispatch(setYahtzeeData(data));
      dispatch(resetDicesState());
    } catch (err: any) {
      console.log(err);
    }
  };

  return (
    <Box
      bgcolor={"secondary.main"}
      borderRadius={"5px"}
      boxSizing={"border-box"}
      display={"flex"}
      flex={1}
      flexDirection={"column"}
      gap={0.5}
      p={1}
      width={"100%"}
    >
      <Box
        alignItems={"center"}
        display={"grid"}
        gap={0.4}
        key={uuidv4()}
        sx={{
          gridTemplateColumns: "0.3fr 1fr 0.2fr",
          "& p": {
            bgcolor: "primary.main",
            borderRadius: "5px",
            color: "#fff",
            cursor: "pointer",
            fontSize: 14,
            py: 0.3,
            textAlign: "center",
            width: "100%",
          },
        }}
      >
        <Typography>REGRA</Typography>
        <Typography>DESCRIÇÃO</Typography>
        <Typography>PONTOS</Typography>
      </Box>
      {rulesList.map((rule: IRules) => {
        return (
          <Box
            alignItems={"center"}
            bgcolor={rulesObj[rule.ruleName] ? "error.main" : "info.light"}
            display={"grid"}
            flex={1}
            gap={0.4}
            key={uuidv4()}
            sx={{
              borderRadius: "5px",
              cursor: "pointer",
              gridTemplateColumns: "0.3fr 1fr 0.2fr",
              gridTemplateRows: "1fr",

              "& p": {
                color: "#fff",
                fontSize: 14,
                textAlign: "center",
              },

              "&:hover": {
                bgcolor:
                  typeof rulesObj[rule.ruleName] === "number"
                    ? null
                    : "tertiary.light",
                transform:
                  typeof rulesObj[rule.ruleName] === "number"
                    ? null
                    : "scale(1.01)",
              },
            }}
            onClick={() =>
              handleRuleChoice(
                rule.ruleName,
                typeof rulesObj[rule.ruleName] === "number" ? true : false
              )
            }
          >
            <Typography>{rule.name}</Typography>
            <Typography>{rule.description}</Typography>
            <Typography>{rulesObj[rule.ruleName] ?? 0}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default Rules;
