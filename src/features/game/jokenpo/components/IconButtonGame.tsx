import { Box, Typography } from "@mui/material";
import React from "react";

interface IProps {
  Icon: () => JSX.Element;
  handlePlayerMove: (choice: string) => void;
  name: string;
  nameBR: string;
}
function IconButtonGame({ name, nameBR, Icon, handlePlayerMove }: IProps) {
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      justifyContent={"center"}
      onClick={() => handlePlayerMove(name)}
    >
      <Icon />
      <Typography variant={"h6"}>{nameBR}</Typography>
    </Box>
  );
}

export default IconButtonGame;
