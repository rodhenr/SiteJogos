import { v4 as uuidv4 } from "uuid";

import { Box, Typography } from "@mui/material";

import { IStatistics } from "../../../matches/generalInfoApiSlice";

import styles from "../../styles/ProfileModal.module.scss";

interface IProps {
  data: IStatistics[];
}

function StatisticList({ data }: IProps) {
  return (
    <Box
      className={styles.statisticsContainer}
      display={"flex"}
      flex={1}
      flexDirection={"column"}
      gap={1}
      minHeight={100}
    >
      <Typography
        sx={{
          color: "white",
          fontFamily: "Roboto Condensed",
          fontSize: "20px",
        }}
      >
        ESTATÍSTICAS
      </Typography>
      <Box color={"#FFF"}>
        <Box
          bgcolor={"#323131"}
          borderRadius={2}
          className={styles.statisticsTitle}
          display={"flex"}
          justifyContent={"center"}
          paddingY={"4px"}
          textAlign={"center"}
          width={"100%"}
        >
          <Typography flex={1} fontSize={"13px"}>
            JOGO
          </Typography>
          <Typography flex={1} fontSize={"13px"}>
            VITÓRIAS
          </Typography>
          <Typography flex={1} fontSize={"13px"}>
            DERROTAS
          </Typography>
        </Box>
        <Box
          className={styles.statisticsItems}
          color={"#6A6A84"}
          display={"flex"}
          flexDirection={"column"}
          gap={1}
          mt={1}
        >
          {data.length === 0 && (
            <Typography
              color={"#6a6a84"}
              display={"flex"}
              fontSize={"20px"}
              justifyContent={"center"}
              p={2}
            >
              Nenhuma partida realizada
            </Typography>
          )}
          {data.map((game) => {
            return (
              <Box
                borderRadius={"6px"}
                display={"flex"}
                justifyContent={"space-between"}
                key={uuidv4()}
                padding={"2px 0"}
                sx={{
                  transition: "background-color 0.2s",
                  ":hover": {
                    backgroundColor: "#FFF",
                    cursor: "pointer",
                  },
                }}
                textAlign={"center"}
              >
                <Typography flex={1} fontSize={"13px"}>
                  {game.game}
                </Typography>
                <Typography flex={1} fontSize={"13px"}>
                  {game.wins}
                </Typography>
                <Typography flex={1} fontSize={"13px"}>
                  {game.loses}
                </Typography>
              </Box>
            );
          })}
        </Box>
      </Box>
      <Box minHeight={"20px"}></Box>
    </Box>
  );
}

export default StatisticList;
