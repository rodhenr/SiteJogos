import { Box } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

import { IPlayerRecentMatches } from "../../userInfoApiSlice";

import MatchTitle from "./MatchTitle";
import MatchItem from "./MatchItem";

interface IProps {
  data: IPlayerRecentMatches[];
}
function MatchesModal({ data }: IProps) {
  return (
    <>
      <MatchTitle />
      <Box display={"flex"} flexDirection={"column"} gap={0.5}>
        {data.map((match) => {
          return (
            <MatchItem
              date={match.date}
              game={match["Game.name"]}
              key={uuidv4()}
              win={match.is_win}
            />
          );
        })}
      </Box>
    </>
  );
}

export default MatchesModal;
