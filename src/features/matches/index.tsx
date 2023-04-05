import { useGetRecentMatchesQuery } from "./generalInfoApiSlice";
import { IRecentMatches } from "./generalInfoSlice";

import { v4 as uuidv4 } from "uuid";

import { Box, Typography } from "@mui/material";

import HomeItemContainer from "../../pages/home/components/HomeItemContainer";
import RecentItem from "./components/RecentItem";

function Index() {
  const { data, isSuccess, isLoading, isError } = useGetRecentMatchesQuery(5);

  return (
    <HomeItemContainer titleIcon={"TvIcon"} titleText={"PARTIDAS RECENTES"}>
      {isSuccess ? (
        <>
          <Box
            display={"flex"}
            mb={1}
            sx={{
              "& p": {
                color: "#6a6a84",
                flex: 1,
                fontSize: {
                  mobile: "12px",
                  tablet: "14px",
                  desktopLarge: "15px",
                },
                textAlign: "center",
              },
            }}
          >
            <Typography>DATA/HORA</Typography>
            <Typography>JOGO</Typography>
            <Typography>USUÁRIO</Typography>
            <Typography>RESULTADO</Typography>
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={0.8}>
            {data.map((match: IRecentMatches) => {
              return (
                <RecentItem
                  game={match["Game.name"]}
                  key={uuidv4()}
                  time={match.date}
                  user={match["User.name"]}
                  win={match.is_win}
                />
              );
            })}
          </Box>
        </>
      ) : (
        <></>
      )}
    </HomeItemContainer>
  );
}

export default Index;
