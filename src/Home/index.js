import { Box } from "@mui/system";
import React from "react";
import { Outlet } from "react-router-dom";
import ResponsiveDrawer from "../Drawer";

function Home() {
  return (
    <Box
      sx={{
        display: "flex",
        flex: "1 1 auto",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <Box sx={{ width: ["none", "none", 240] }}>
        <ResponsiveDrawer />
      </Box>
      <Box
        sx={{
          py: 2,
          overflowX: "hidden",
          overflowY: "auto",
          width: "100%",
          px: 2,
          backgroundColor: "#d7dcf6",
        }}
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Home;
