import { Box, CircularProgress } from "@mui/material";
import Title from "./Title";

interface IProps {
  children: JSX.Element | JSX.Element[];
  icon: any;
  isLoading: boolean;
  size: number;
  titleText: string;
}

function HomeItemContainer({
  children,
  icon,
  isLoading,
  size,
  titleText,
}: IProps) {
  //Implementar loading
  return (
    <Box
      bgcolor={"#1b1e23"}
      borderRadius={"10px"}
      boxShadow={24}
      boxSizing={"border-box"}
      display={"flex"}
      flex={size}
      flexDirection={"column"}
      minHeight={"100px"}
      sx={{
        p: { mobile: 1, laptop: 2 },
        overflowY: "auto",

        "&::-webkit-scrollbar": {
          display: "none",
        },
      }}
    >
      <Title Icon={icon} title={titleText.toUpperCase()} />
      {isLoading ? (
        <Box
          alignItems={"center"}
          display={"flex"}
          flex={1}
          justifyContent={"center"}
        >
          <CircularProgress />
        </Box>
      ) : (
        children
      )}
    </Box>
  );
}

export default HomeItemContainer;
