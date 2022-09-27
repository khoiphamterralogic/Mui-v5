import styled from "@emotion/styled";
import { alpha, Box } from "@mui/system";
import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";

//MUI
import {
  Badge,
  Divider,
  IconButton,
  InputBase,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  MenuList,
} from "@mui/material";

//MUI Icon
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import LightModeIcon from "@mui/icons-material/LightMode";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ReorderIcon from "@mui/icons-material/Reorder";
import SearchIcon from "@mui/icons-material/Search";
import SettingsIcon from "@mui/icons-material/Settings";
import TranslateIcon from "@mui/icons-material/Translate";

//components
import UserAvatar from "./Avatar";

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
  height: "36px",
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
  height: "36px",
}));

const ProfileMenu = ({ anchorEl, handleClose }) => {
  const open = Boolean(anchorEl);

  return (
    <Fragment>
      <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
        <MenuList>
          <MenuItem>
            <ListItemIcon sx={{ mr: 1 }}>
              <UserAvatar />
            </ListItemIcon>
            <ListItemText>Super Admin </ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem component={Link} to="/profile">
            <ListItemIcon>
              <PersonOutlineIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <MailOutlineIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Mail</ListItemText>
          </MenuItem>
          <MenuItem>
            <ListItemIcon>
              <SettingsIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </MenuItem>
          <Divider />
          <MenuItem>
            <ListItemIcon>
              <ExitToAppIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText>Sign Out</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>
    </Fragment>
  );
};

const Navigation = () => {
  const [mode, setMode] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Fragment>
      <Box
        sx={{
          width: "100%",
          height: 50,
          px: 1,
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
            width: "min(224px, 15%)",
            alignItems: "center",
            height: "100%",
          }}
        >
          <IconButton>
            <ReorderIcon />
          </IconButton>
          {/* Search Bar */}
        </Box>

        {/* Tab */}
        <Box
          sx={{
            width: "min(72%, 1200px)",
            display: "flex",
            justifyContent: "flex-start",
            height: "100%",
            alignItems: "center",
            px: 2,
          }}
        >
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

        {/* Infomation */}
        <Box
          sx={{
            width: "min(200px, 30%)",
            height: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            "& button": { mx: 1, width: 42, height: 42 },
          }}
        >
          <IconButton>
            <TranslateIcon />
          </IconButton>
          <IconButton onClick={() => setMode(!mode)}>
            {!mode ? <DarkModeIcon /> : <LightModeIcon />}
          </IconButton>
          <IconButton
            size="large"
            aria-label="show 17 new notifications"
            color="inherit"
          >
            <Badge badgeContent={8} color="error">
              <NotificationsNoneIcon />
            </Badge>
          </IconButton>
          <IconButton size="small" onClick={(event) => handleClick(event)}>
            <UserAvatar />
          </IconButton>
          <ProfileMenu anchorEl={anchorEl} handleClose={handleClose} />
        </Box>
      </Box>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
