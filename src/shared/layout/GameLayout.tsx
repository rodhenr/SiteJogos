import { v4 as uuidv4 } from "uuid";

import { Box, Typography } from "@mui/material";

import MainLayout from "./MainLayout";

interface IProps {
  children: JSX.Element | JSX.Element[];
  rules: any[];
}

function GameLayout({ children, rules }: IProps) {
  return (
    <MainLayout>
      <Box
        bgcolor={"#1b1e23"}
        borderRadius={"10px"}
        boxSizing={"border-box"}
        boxShadow={24}
        display={"flex"}
        flexDirection={"column"}
        flex={1}
        gap={2}
        p={2}
        sx={{
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Box
          bgcolor={"#FFF"}
          flex={1}
          sx={{ minHeight: { desktopLarge: "450px" } }}
        >
          {children}
        </Box>
        <Box display={"flex"} flex={1} flexDirection={"column"}>
          <Typography color={"#FFF"} mb={1} variant="h1">
            REGRAS
          </Typography>
          <Box display={"flex"} flexDirection={"column"} gap={1}>
            {rules.map((rule, index) => {
              return (
                <Box key={uuidv4()}>
                  <Typography color={"#FFF"}>
                    {index + 1} - {rule}
                  </Typography>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    </MainLayout>
  );
}

export default GameLayout;
