import { Box } from "@mui/material";
import Title from "./Title";

interface IProps {
  children: JSX.Element | JSX.Element[];
  icon: any;
  size: number;
  titleText: string;
}

function HomeItemContainer({ children, icon, size, titleText }: IProps) {
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
        transition: "background-color 0.3s",

        "&:hover": {
          bgcolor: "#171a1f",
        },
      }}
    >
      <Title Icon={icon} title={titleText.toUpperCase()} />
      {children}
    </Box>
  );
}

export default HomeItemContainer;
