import { Box } from "@mui/material";
import Title from "./Title";

interface IProps {
  children: JSX.Element | JSX.Element[];
  titleIcon: string;
  titleText: string;
}

function HomeItemContainer({ children, titleIcon, titleText }: IProps) {
  //Implementar loading
  return (
    <Box
      bgcolor={"#1b1e23"}
      borderRadius={"10px"}
      boxShadow={24}
      boxSizing={"border-box"}
      display={"flex"}
      flex={1}
      flexDirection={"column"}
      minHeight={"100px"}
      sx={{
        p: { mobile: 1, laptop: 2 },
        transition: "background-color 0.3s",

        "&:hover": {
          bgcolor: "#171a1f",
        },
      }}
    >
      <Title Icon={titleIcon} title={titleText.toUpperCase()} />
      {children}
    </Box>
  );
}

export default HomeItemContainer;
