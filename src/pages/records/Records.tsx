import { v4 as uuidv4 } from "uuid";

import { Box, Typography } from "@mui/material";

import MainLayout from "../../shared/layout/MainLayout";
import { useGetRecordsQuery } from "../../features/matches/generalInfoApiSlice";

import Loading from "../../shared/components/Loading";

function Records() {
  const { data, isSuccess, isLoading } = useGetRecordsQuery();

  return (
    <MainLayout>
      <Box
        display={"grid"}
        flex={1}
        gap={2}
        justifyContent={"center"}
        sx={{
          gridTemplateColumns: {
            mobile: "repeat(1, 1fr)",
            laptop: "repeat(3, 1fr)",
            desktopLarger: "repeat(5, 1fr)",
          },
          gridTemplateRows: {
            mobile: "repeat(2, auto)",
            laptop: "repeat(3, 180px)",
            desktopLarger: "repeat(2, 180px)",
          },
        }}
      >
        {isLoading && <Loading />}

        {isSuccess && (
          <>
            {Object.keys(data).map((game) => {
              const gameRecords = data[game];
              const gameName = gameRecords[0].gameName;

              return (
                <Box
                  alignItems={"center"}
                  bgcolor={"primary.main"}
                  borderRadius={"10px"}
                  boxShadow={2}
                  display={"flex"}
                  flexDirection={"column"}
                  gap={1.5}
                  justifyContent={"space-between"}
                  px={1}
                  py={1.5}
                  sx={{
                    "& p": {
                      color: "#FFF",
                      textAlign: "center",
                    },
                  }}
                  key={uuidv4()}
                >
                  <Typography
                    flex={1}
                    sx={{ fontSize: { mobile: "16px", laptop: "20px" } }}
                  >
                    Vitórias - {gameName}
                  </Typography>
                  <Box
                    display={"flex"}
                    flex={"3"}
                    flexDirection={"column"}
                    gap={0.5}
                    justifyContent={"flex-start"}
                    width={"100%"}
                  >
                    {gameRecords.map((player) => {
                      return (
                        <Box
                          bgcolor={"info.dark"}
                          borderRadius={"5px"}
                          boxSizing={"border-box"}
                          display={"flex"}
                          justifyContent={"space-between"}
                          padding={"2px 8px"}
                          sx={{
                            transition: "background-color 0.2s",

                            "& p": {
                              fontSize: "12px",
                            },

                            "&:hover": {
                              bgcolor: "info.main",
                              cursor: "pointer",

                              "& p": {
                                color: "#FFF",
                              },
                            },
                          }}
                          width={"100%"}
                          key={uuidv4()}
                        >
                          <Typography>{player.userName}</Typography>
                          <Typography>{player.totalWins}</Typography>
                        </Box>
                      );
                    })}
                  </Box>
                </Box>
              );
            })}
          </>
        )}
      </Box>
    </MainLayout>
  );
}

export default Records;
