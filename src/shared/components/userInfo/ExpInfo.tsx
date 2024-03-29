import { useEffect, useRef, useState } from "react";

import { Box, Typography } from "@mui/material";

interface IProps {
  exp: number;
  isModal: boolean;
  level: number;
  maxExpLevel: string;
}

function ExpInfo({ exp, isModal, level, maxExpLevel }: IProps) {
  const componentRef = useRef<HTMLDivElement>(null);
  const [expWidth, setExpWidth] = useState<number>(0);

  useEffect(() => {
    if (componentRef.current) {
      setExpWidth(componentRef.current.offsetWidth);
    }
  }, []);

  const widthUserExp = isNaN(exp / Number(maxExpLevel))
    ? 0
    : (exp / Number(maxExpLevel)) * expWidth;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      ref={componentRef}
      sx={{ width: isModal ? "100%" : "200px" }}
    >
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        mb={0.5}
        sx={{
          fontSize: { laptop: "14px", desktopLarger: "15px" },
        }}
      >
        <Typography color={"#FFF"} sx={{ fontSize: isModal ? "16px" : "13px" }}>
          Nível {level}
        </Typography>
        <Typography color={"#FFF"} sx={{ fontSize: isModal ? "16px" : "13px" }}>
          {exp} / {maxExpLevel}
        </Typography>
      </Box>
      <Box
        bgcolor={"#FFF"}
        display={"inline-block"}
        overflow={"hidden"}
        sx={{
          height: isModal ? "13px" : "8px",
          zIndex: "100",
          /* [theme.breakpoints.up("desktopLarge")]: {
            height: "13px",
          }, */
        }}
        width={"100%"}
      >
        <Box
          bgcolor={"#2a18f3"}
          height={"100%"}
          width={widthUserExp}
          zIndex={"100"}
        />
      </Box>
    </Box>
  );
}

export default ExpInfo;
