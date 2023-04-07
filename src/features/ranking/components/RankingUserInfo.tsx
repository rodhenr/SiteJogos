import { useGetPlayerInfoFromRankingQuery } from "../../matches/generalInfoApiSlice";

import { Avatar, Box, Typography, useTheme } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

import Loading from "../../../shared/components/Loading";

interface IProps {
  userID: number;
}

function RankingUserInfo({ userID }: IProps) {
  const theme = useTheme()
  const { data, isSuccess, isLoading } =
    useGetPlayerInfoFromRankingQuery(userID);

  return (
    <>
      {isLoading && <Loading />}
      {isSuccess && (
        <Box
          display={"flex"}
          flexDirection={"column"}
          gap={2}
          height={"100%"}
          width={"100%"}
          sx={{
            "& p": {
              color: "#FFF",
            },
          }}
        >
          <Box display={"flex"} justifyContent={"space-between"}>
            <Typography
              color={"#ff4c29"}
              flex={1}
              fontFamily={"'Roboto Condensed', sans-serif"}
              fontSize={"25px"}
            >
              RANKING #{data.ranking}
            </Typography>
            <Typography
              fontFamily={"'Roboto Condensed', sans-serif"}
              fontSize={"13px"}
            >
              ID: {data.id}
            </Typography>
          </Box>
          <Box alignItems={"center"} display={"flex"} gap={1}>
            <Avatar
              alt=""
              src={data.avatar}
              sx={{
                border: "2px solid black",
                height: "60px",
                width: "60px",
              }}
            />
            <Box display={"flex"} flexDirection={"column"}>
              <Typography fontSize={"24px"}>
                {data.name.toUpperCase()}
              </Typography>
              <Typography fontSize={"11px"}>NÍVEL {data.level}</Typography>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} mt={2}>
            <Box
              bgcolor={"#0c0c0c"}
              display={"flex"}
              justifyContent={"space-between"}
              px={0}
              py={0.5}
              sx={{
                "& p": {
                  flex: 1,
                  textAlign: "center",
                },
              }}
            >
              <Typography>JOGO</Typography>
              <Typography>VITÓRIAS</Typography>
              <Typography>DERROTAS</Typography>
            </Box>
            <Box
              bgcolor={"#272727"}
              display={"flex"}
              flexDirection={"column"}
              gap={0.5}
              p={0.5}
            >
              {data.statistics.map((statistic) => {
                return (
                  <Box
                    borderRadius={"6px"}
                    display={"flex"}
                    justifyContent={"space-between"}
                    sx={{
                      transition: "background-color 0.3s",

                      "& p": {
                        color: "#6a6a84",
                        flex: 1,
                        textAlign: "center",
                      },

                      "&:hover": {
                        bgcolor: "#1b1e23",
                        cursor: "pointer",
                      },
                    }}
                    key={uuidv4()}
                  >
                    <Typography>{statistic.game}</Typography>
                    <Typography>{statistic.wins}</Typography>
                    <Typography>{statistic.loses}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      )}
    </>
  );
}

export default RankingUserInfo;
