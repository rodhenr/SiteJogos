import { Box, Typography } from "@mui/material";

interface IProps {
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  text: string;
}

function LoginRegisterSwitcher({ handleClick, text }: IProps) {
  return (
    <Box
      alignItems={"center"}
      display={"flex"}
      fontSize={"20px"}
      height={"100px"}
      justifyContent={"center"}
      onClick={handleClick}
      sx={{ flex: { tablet: 1 } }}
      width={"100%"}
    >
      <Typography
        color={"#ff4c29"}
        sx={{
          "&:hover": {
            cursor: "pointer",
          },
        }}
      >
        {text}
      </Typography>
    </Box>
  );
}

export default LoginRegisterSwitcher;
