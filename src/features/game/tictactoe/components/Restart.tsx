import { Box, Button } from "@mui/material";

interface IProps {
  over: boolean;
  turno: number;
}

function Restart({ over, turno }: IProps) {
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      justifyContent={"center"}
      sx={{ minHeight: "50px" }}
    >
      {over || turno === 9 ? (
        <Button
          color={"success"}
          sx={{
            cursor: "pointer",

            "&:hover": {
              color: "info.main",
            },
          }}
          variant={"contained"}
          onClick={() => window.location.reload()}
        >
          JOGAR NOVAMENTE
        </Button>
      ) : null}
    </Box>
  );
}

export default Restart;
