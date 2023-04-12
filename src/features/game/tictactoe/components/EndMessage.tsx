import { Box, Typography } from "@mui/material";

interface Props {
  info: string;
  over: boolean;
  turno: number;
}

function EndMensage({ info, over, turno }: Props) {
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
      sx={{
        minHeight: "50px",
        "& p": {
          color: "#fff",
          fontSize: { mobile: "18px", laptop: "22px" },
        },
      }}
    >
      {over ? (
        <Box>
          <Typography>{info}</Typography>
        </Box>
      ) : turno === 9 ? (
        <Box>
          <Typography>O JOGO TERMINOU EMPATADO!</Typography>
        </Box>
      ) : (
        ""
      )}
    </Box>
  );
}

export default EndMensage;
