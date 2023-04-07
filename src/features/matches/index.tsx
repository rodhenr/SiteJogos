import { useGetRecentMatchesQuery } from "./generalInfoApiSlice";

import { v4 as uuidv4 } from "uuid";

import { Box, Typography } from "@mui/material";
import TvIcon from "@mui/icons-material/Tv";

import HomeItemContainer from "../../pages/home/components/HomeItemContainer";
import RecentItem from "./components/RecentItem";

function Index() {
  const { data, isSuccess, isLoading } = useGetRecentMatchesQuery(10);

  const titles = ["DATA/HORA", "JOGO", "USUÁRIO", "RESULTADO"];

  return (
    <HomeItemContainer
      icon={TvIcon}
      isLoading={isLoading}
      size={2}
      titleText={"PARTIDAS RECENTES"}
    >
      {isSuccess ? (
        <>
          <Box
            display={"flex"}
            mb={1}
            sx={{
              "& p": {
                color: "#FFF",
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
            {titles.map((title) => {
              return <Typography key={uuidv4()}>{title}</Typography>;
            })}
          </Box>
          <Box display={"flex"} flexDirection={"column"} gap={0.8}>
            {data.map((match) => {
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
        <Box
          alignItems={"center"}
          display={"flex"}
          flex={1}
          justifyContent={"center"}
        >
          <Typography color={"#FFF"}>
            Ocorreu um erro. Tente novamente.
          </Typography>
        </Box>
      )}
    </HomeItemContainer>
  );
}

export default Index;
