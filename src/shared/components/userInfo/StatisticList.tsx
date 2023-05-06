import { v4 as uuidv4 } from "uuid";

import { Box, Typography } from "@mui/material";

import { IStatistics } from "../../../app/generalInfoApiSlice";

interface IProps {
  data: IStatistics[];
}

function StatisticList({ data }: IProps) {
  return (
    <Box
      display={"flex"}
      flex={1}
      flexDirection={"column"}
      gap={1}
      minHeight={100}
      width={"100%"}
    >
      <Typography
        sx={{
          color: "tertiary.main",
          fontSize: "20px",
        }}
      >
        ESTATÍSTICAS
      </Typography>
      <Box color={"#FFF"}>
        <Box
          bgcolor={"info.dark"}
          borderRadius={2}
          display={"flex"}
          justifyContent={"center"}
          paddingY={"4px"}
          sx={{ fontSize: { mobile: "13px", tablet: "17px" } }}
          textAlign={"center"}
          width={"100%"}
        >
          <Typography flex={1}>JOGO</Typography>
          <Typography flex={1}>VITÓRIAS</Typography>
          <Typography flex={1}>EMPATES</Typography>
          <Typography flex={1}>DERROTAS</Typography>
        </Box>
        <Box
          color={"#FFF"}
          display={"flex"}
          flexDirection={"column"}
          gap={1}
          mt={1}
        >
          {data.length === 0 && (
            <Typography
              color={"#FFF"}
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
                py={0.25}
                sx={{
                  transition: "background-color 0.2s",
                  ":hover": {
                    backgroundColor: "info.light",
                    cursor: "pointer",
                  },

                  "& p": {
                    fontSize: "14px",
                  },
                }}
                textAlign={"center"}
              >
                <Typography flex={1}>{game.game}</Typography>
                <Typography flex={1}>{game.wins}</Typography>
                <Typography flex={1}>{game.draws}</Typography>
                <Typography flex={1}>{game.loses}</Typography>
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
