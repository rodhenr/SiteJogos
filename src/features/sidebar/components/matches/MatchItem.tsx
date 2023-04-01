import { v4 as uuidv4 } from "uuid";

import { Box, Typography } from "@mui/material";

import { formatDateWithTime } from "../../../../utils/formatDate";

interface IProps {
  date: Date;
  game: string;
  win: boolean;
}

function MatchItem({ date, game, win }: IProps) {
  return (
    <Box
      color={"#6a6a84"}
      display={"flex"}
      justifyContent={"space-between"}
      key={uuidv4()}
      px={0.5}
      py={0.25}
    >
      <Typography flex={1} fontSize={"13px"} textAlign={"center"}>
        {formatDateWithTime(date)}
      </Typography>
      <Typography flex={1} fontSize={"13px"} textAlign={"center"}>
        {game}
      </Typography>
      <Typography
        flex={1}
        fontSize={"13px"}
        textAlign={"center"}
        sx={win ? { color: "green" } : { color: "red" }}
      >
        {win ? "VITÓRIA" : "DERROTA"}
      </Typography>
    </Box>
  );
}

export default MatchItem;
