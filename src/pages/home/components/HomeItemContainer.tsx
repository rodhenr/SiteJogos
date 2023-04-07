import { Box } from "@mui/material";

import Title from "./Title";
import Loading from "../../../shared/components/Loading";

interface IProps {
  children: JSX.Element | JSX.Element[];
  icon: any;
  isLoading: boolean;
  maxHeight: string;
  size: number;
  titleText: string;
}

function HomeItemContainer({
  children,
  icon,
  isLoading,
  maxHeight,
  size,
  titleText,
}: IProps) {
  return (
    <Box
      bgcolor={"primary.main"}
      borderRadius={"10px"}
      boxShadow={3}
      boxSizing={"border-box"}
      display={"flex"}
      flex={size}
      flexDirection={"column"}
      minHeight={"100px"}
      maxHeight={maxHeight}
      sx={{
        p: { mobile: 2, laptop: 2 },
        overflowY: "auto",

        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Title Icon={icon} title={titleText.toUpperCase()} />
      {isLoading ? <Loading /> : children}
    </Box>
  );
}

export default HomeItemContainer;
