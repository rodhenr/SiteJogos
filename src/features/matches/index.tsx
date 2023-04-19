import { useGetRecentMatchesQuery } from "../../app/generalInfoApiSlice";

import { v4 as uuidv4 } from "uuid";

import { Box, Typography } from "@mui/material";
import TvIcon from "@mui/icons-material/Tv";

import HomeItemContainer from "../../pages/home/components/HomeItemContainer";
import RecentItem from "./components/MatchItem";
import ErrorMessage from "../../shared/components/ErrorMessage";

function Index() {
  const { data, isSuccess, isLoading, isError } = useGetRecentMatchesQuery(10);

  const titles = ["DATA/HORA", "JOGO", "USUÁRIO", "RESULTADO"];

  return (
    <HomeItemContainer
      icon={TvIcon}
      isLoading={isLoading}
      maxHeight={"100%"}
      size={1}
      titleText={"PARTIDAS RECENTES"}
    >
      <>
        {isSuccess && (
          <>
            <Box
              display={"flex"}
              mb={1}
              sx={{
                "& p": {
                  flex: 1,
                  fontSize: {
                    mobile: "12px",
                    tablet: "14px",
                    desktopLarge: "16px",
                  },
                  fontWeight: 700,
                  textAlign: "center",
                },
              }}
            >
              {titles.map((title) => {
                return (
                  <Typography color={"info.light"} key={uuidv4()}>
                    {title}
                  </Typography>
                );
              })}
            </Box>
            <Box
              display={"flex"}
              flexDirection={"column"}
              gap={0.8}
              sx={{
                overflowY: "auto",

                "&::-webkit-scrollbar": {
                  display: "none",
                },
              }}
            >
              {data.map((match) => {
                return (
                  <RecentItem
                    game={match["Game.name"]}
                    key={uuidv4()}
                    time={match.date}
                    user={match["User.name"]}
                    result={
                      match[
                        "MatchProcessingHistory.Config_MatchResult.matchResult"
                      ]
                    }
                  />
                );
              })}
            </Box>
          </>
        )}
        {isError && <ErrorMessage />}
      </>
    </HomeItemContainer>
  );
}

export default Index;
