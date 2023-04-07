import { useState } from "react";

import { useGetPlayerRankingQuery } from "../../features/matches/generalInfoApiSlice";

import { v4 as uuidv4 } from "uuid";

import { Box, Typography } from "@mui/material";

import MainLayout from "../../shared/layout/MainLayout";
import RankingItem from "../../features/ranking/components/RankingItem";
import RankingUserInfo from "../../features/ranking/components/RankingUserInfo";
import Loading from "../../shared/components/Loading";

function Ranking() {
  const [userID, setUserID] = useState<number | null>(null);

  const { data, isSuccess, isLoading } = useGetPlayerRankingQuery(100);

  const searchPlayerInfo = (userID: number) => {
    setUserID(userID);
  };

  return (
    <MainLayout>
      <Box
        display={"flex"}
        flex={"1"}
        gap={1}
        maxHeight={"100%"}
        sx={{
          flexDirection: { mobile: "column", laptop: "row" },
          mb: { mobile: 2, laptop: 0 },
        }}
      >
        {isLoading && <Loading />}

        <Box
          bgcolor={"#1b1e23"}
          borderRadius={"10px"}
          boxSizing={"border-box"}
          boxShadow={6}
          display={"flex"}
          flex={2}
          flexDirection={"column"}
          gap={2}
          p={2}
          sx={{
            maxHeight: {
              mobile: "350px",
              laptop: "auto",
              desktopLarger: "100%",
            },
          }}
        >
          <Typography color={"#6a6a84"} fontSize={"22px"} textAlign={"center"}>
            RANKING GERAL
          </Typography>
          {isSuccess && (
            <>
              <Box
                display={"flex"}
                flex={1}
                flexDirection={"column"}
                gap={0.5}
                sx={{
                  overflowY: "auto",

                  "&::-webkit-scrollbar": { display: "none" },
                }}
              >
                {data.map((player) => {
                  return (
                    <Box
                      key={uuidv4()}
                      onClick={() => searchPlayerInfo(player.id)}
                    >
                      <RankingItem
                        level={player.level}
                        player={player.name}
                        playerID={player.id}
                        position={player.position}
                      />
                    </Box>
                  );
                })}
              </Box>
            </>
          )}
        </Box>
        <Box
          alignItems={"center"}
          bgcolor={"#1b1e23"}
          borderRadius={"10px"}
          boxSizing={"border-box"}
          boxShadow={6}
          display={"flex"}
          flex={1}
          justifyContent={"center"}
          p={2}
        >
          {!userID ? (
            <Typography
              color={"#6a6a84"}
              fontSize={"25px"}
              textAlign={"center"}
            >
              Selecione um jogador para ver as suas estatísticas
            </Typography>
          ) : (
            <RankingUserInfo userID={userID} />
          )}
        </Box>
      </Box>
    </MainLayout>
  );
}

export default Ranking;
