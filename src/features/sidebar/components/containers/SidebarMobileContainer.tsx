import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import { Box, Drawer } from "@mui/material";

interface IProps {
  children: JSX.Element | JSX.Element[];
}

function DrawerContainer({ children }: IProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box boxSizing={"border-box"} display={"flex"} py={1} px={2}>
      <Box onClick={toggleDrawer}>
        <MenuIcon sx={{ color: "white", fontSize: "32px" }} />
      </Box>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <Box
          bgcolor={"#131315"}
          display={"flex"}
          height={"100%"}
          py={3}
          px={2}
          width={"250px"}
        >
          {children}
        </Box>
      </Drawer>
    </Box>
  );
}

export default DrawerContainer;
