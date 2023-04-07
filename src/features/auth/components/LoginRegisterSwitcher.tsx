import { Box, Typography, useTheme } from "@mui/material";

interface IProps {
  handleClick: React.MouseEventHandler<HTMLDivElement>;
  text: string;
}

function LoginRegisterSwitcher({ handleClick, text }: IProps) {
  const theme = useTheme();

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
        color={theme.palette.info.light}
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
