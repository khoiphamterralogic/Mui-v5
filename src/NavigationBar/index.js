import styled from "@emotion/styled";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import { Avatar, InputBase } from "@mui/material";
import { alpha, Box } from "@mui/system";
import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  border: "1px solid rgba(0, 0, 0, 0.2)",
  height: "32px",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  height: "32px",
}));

const Navigation = () => {
  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          height: 42,
          mb: 1,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow:
            "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 0px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px",
        }}
      >
        {/* Menu And Search */}
        <Box
          sx={{
            display: "flex",
            width: "25%",
            alignItems: "center",
            ml: 1,
            height: "100%",
          }}
        >
          <Box sx={{ mr: 3, display: "flex", alignItems: "center" }}>
            <ReorderIcon />
          </Box>
          {/* Search Bar */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>

        {/* Tab */}
        <Box></Box>

        {/* Infomation */}
        <Box sx={{ mr: 1 }}>
          <Avatar sizes="small">
            <AccountCircleIcon fontSize="large" />
          </Avatar>
        </Box>
      </Box>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
