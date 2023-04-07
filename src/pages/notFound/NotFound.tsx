import { useEffect, useState } from "react";

import { Navigate } from "react-router-dom";

import { Box, Typography } from "@mui/material";

function NotFound() {
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const timeoutID = setTimeout(() => {
      setRedirect(true);
    }, 3000);

    return () => clearTimeout(timeoutID);
  }, []);

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <Box
      alignItems={"center"}
      boxSizing={"border-box"}
      display={"flex"}
      flexDirection={"column"}
      gap={3}
      height={"100vh"}
      justifyContent={"center"}
      sx={{
        "& p, & h1": {
          color: "#FFF",
        },
      }}
      width={"100vw"}
    >
      <Typography fontSize={"48px"} variant={"h1"}>
        Ops... Página inválida!
      </Typography>
      <Typography fontSize={"24px"}>Redirecionando...</Typography>
    </Box>
  );
}

export default NotFound;
