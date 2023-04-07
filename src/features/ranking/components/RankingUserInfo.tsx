import { useGetPlayerInfoFromRankingQuery } from "../../matches/generalInfoApiSlice";

import { Avatar, Box, Typography, useTheme } from "@mui/material";

import { v4 as uuidv4 } from "uuid";

import Loading from "../../../shared/components/Loading";

interface IProps {
  userID: number;
}

function RankingUserInfo({ userID }: IProps) {
  const theme = useTheme();
  const { data, isSuccess, isLoading } =
    useGetPlayerInfoFromRankingQuery(userID);

  console.log(data);

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
              color={theme.palette.info.light}
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
              bgcolor={theme.palette.info.main}
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
            </Box>
            <Box
              bgcolor={theme.palette.info.light}
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
                        color: theme.palette.primary.dark,
                        flex: 1,
                        fontSize: { mobile: "13px" },
                        textAlign: "center",
                      },

                      "&:hover": {
                        bgcolor: theme.palette.secondary.light,
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
