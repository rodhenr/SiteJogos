import { useGetPlayerInfoFromRankingQuery } from "../../../app/generalInfoApiSlice";

import { Avatar, Box, Typography } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

import Loading from "../../../shared/components/Loading";
import ErrorMessage from "../../../shared/components/ErrorMessage";

interface IProps {
  userID: number;
}

function RankingUserInfo({ userID }: IProps) {
  const { data, isSuccess, isLoading, isError } =
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
              color={"info.light"}
              flex={1}
              fontSize={"22px"}
              variant={"h1"}
            >
              RANKING #{data.position}
            </Typography>
            <Typography fontSize={"13px"}>ID: {data.id}</Typography>
          </Box>
          <Box alignItems={"center"} display={"flex"} gap={1}>
            <Avatar
              alt="user avatar"
              src={data.avatar}
              sx={{
                height: "50px",
                width: "50px",
              }}
            />
            <Box
              display={"flex"}
              flexDirection={"column"}
              overflow={"hidden"}
              width={"100%"}
            >
              <Typography sx={{ fontSize: { mobile: "17px" } }}>
                {data.name.toUpperCase().substring(0, 30)}
              </Typography>
              <Typography fontSize={"12px"}>NÍVEL {data.level}</Typography>
            </Box>
          </Box>
          <Box display={"flex"} flexDirection={"column"} mt={2}>
            <Box
              bgcolor={"info.main"}
              borderRadius={"10px 10px 0 0"}
              display={"flex"}
              justifyContent={"space-between"}
              px={0}
              py={0.5}
              sx={{
                "& p": {
                  flex: 1,
                  fontSize: { mobile: "14px" },
                  textAlign: "center",
                },
              }}
            >
              <Typography>JOGO</Typography>
              <Typography>VITÓRIAS</Typography>
              <Typography>DERROTAS</Typography>
              <Typography>EMPATES</Typography>
            </Box>
            <Box
              bgcolor={"info.light"}
              borderRadius={"0 0 10px 10px"}
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
                        color: "primary.dark",
                        flex: 1,
                        fontSize: { mobile: "13px" },
                        textAlign: "center",
                      },

                      "&:hover": {
                        bgcolor: "secondary.light",
                        cursor: "pointer",
                      },
                    }}
                    key={uuidv4()}
                  >
                    <Typography>{statistic.game}</Typography>
                    <Typography>{statistic.wins}</Typography>
                    <Typography>{statistic.loses}</Typography>
                    <Typography>{statistic.draws}</Typography>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Box>
      )}

      {isError && <ErrorMessage />}
    </>
  );
}

export default RankingUserInfo;
