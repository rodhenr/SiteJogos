import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";

import { Box, Typography } from "@mui/material";

import { rulesList } from "./RulesList";

export function Rules() {
  const dispatch = useDispatch();
  const dices = useSelector((state: RootState) => state.yahtzee.currentDices);
  const ruleSum_all = useSelector(
    (state: RootState) => state.yahtzee.ruleSum_all
  );
  const ruleSum_one = useSelector(
    (state: RootState) => state.yahtzee.ruleSum_one
  );
  const ruleSum_two = useSelector(
    (state: RootState) => state.yahtzee.ruleSum_two
  );
  const ruleSum_three = useSelector(
    (state: RootState) => state.yahtzee.ruleSum_three
  );
  const ruleSum_four = useSelector(
    (state: RootState) => state.yahtzee.ruleSum_four
  );
  const ruleSum_five = useSelector(
    (state: RootState) => state.yahtzee.ruleSum_five
  );
  const ruleSum_six = useSelector(
    (state: RootState) => state.yahtzee.ruleSum_six
  );
  const ruleSame_three = useSelector(
    (state: RootState) => state.yahtzee.ruleSame_three
  );
  const ruleSame_four = useSelector(
    (state: RootState) => state.yahtzee.ruleSame_four
  );
  const ruleRow_four = useSelector(
    (state: RootState) => state.yahtzee.ruleRow_four
  );
  const ruleRow_five = useSelector(
    (state: RootState) => state.yahtzee.ruleRow_five
  );
  const rule_yahtzee = useSelector(
    (state: RootState) => state.yahtzee.rule_yahtzee
  );

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      width={"100%"}
    >
      {rulesList.map((rule, index) => {
        return (
          <Box
            display={"flex"}
            gap={"0.2rem"}
            px={0.5}
            py={0.15}
            sx={{
              "& p": {
                bgcolor: "#eb1d36",
                borderRadius: "5px",
                color: "#fff",
                cursor: "pointer",
                fontSize: "0.9rem",
                padding: "0.7rem 0",
                textAlign: "center",
                width: "100%",
              },
              "&:hover": {
                transform: "scale(1.01)",

                "& p": {
                  bgcolor: "#d5182e",
                },
              },
            }}
            key={index}
          >
            <Typography>{rule.name}</Typography>
            <Typography>{rule.description}</Typography>
            <Typography>{[rule.ruleName]}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default Rules;
