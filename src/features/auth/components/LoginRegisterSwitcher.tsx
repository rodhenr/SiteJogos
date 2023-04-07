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
      height={"100px"}
      justifyContent={"center"}
      onClick={handleClick}
      sx={{ flex: { tablet: 1 } }}
      width={"100%"}
    >
      <Typography
        color={"tertiary.main"}
        fontSize={"20px"}
        sx={{
          "&:hover": {
            color: "tertiary.light",
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
