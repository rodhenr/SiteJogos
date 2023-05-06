import { useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

import { Box, Typography } from "@mui/material";

import { IRulesObj } from "./Rules";

function Score() {
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

  const sumPoints = () => {
    const values: number[] = Object.values(rulesObj).filter(
      (value) => value !== null
    );

    const sum = values.reduce((acc, curr) => acc + curr, 0);

    return sum;
  };

  return (
    <Box
      alignItems={"center"}
      bgcolor={"secondary.main"}
      borderRadius={"5px"}
      display={"flex"}
      justifyContent={"center"}
      
      sx={{
        py: {mobile: 1, desktop: 2},
        "& p": {
          color: "#fff",
          fontSize: { mobile: 18, desktop: 20 },
        },
      }}
      width={"100%"}
    >
      <Typography>PONTOS: {sumPoints()}</Typography>
    </Box>
  );
}

export default Score;
