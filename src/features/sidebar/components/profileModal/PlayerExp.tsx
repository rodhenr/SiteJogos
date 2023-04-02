import { Box } from "@mui/material";

import ExpInfo from "../ExpInfo";

interface IProps {
  experience: number;
  level: number;
  maxExperience: string;
}

function PlayerExp({ experience, level, maxExperience }: IProps) {
  return (
    <Box color={"#6A6A84"}>
      <ExpInfo
        exp={experience}
        isModal={true}
        level={level}
        maxExpLevel={maxExperience}
      />
    </Box>
  );
}

export default PlayerExp;
