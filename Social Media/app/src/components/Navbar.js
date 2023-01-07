import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  InputBase,
  alpha,
  Badge,
  Avatar,
} from "@material-ui/core";
import SearchIcon from "@mui/icons-material/Search";
import MailIcon from "@mui/icons-material/Mail";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logoLg: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  logoSm: {
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  search: {
    display: "none",
    alignItems: "center",
    width: "50%",
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    padding: "5px",
    borderRadius: "5px",
    [theme.breakpoints.up("sm")]:{
        display: "flex",
    }
  },
  input: {
    color: "white",
    marginLeft: theme.spacing(1),
  },
  icons: {
    display: "flex",
    alignItems: "center",
  },
  icon:{
    marginRight: theme.spacing(2),
  }
}));

function Navbar() {
  const classes = useStyles();
  return (
    <>
      <AppBar>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" className={classes.logoLg}>
            Material UI
          </Typography>
          <Typography variant="h6" className={classes.logoSm}>
            MUI
          </Typography>
          <div className={classes.search}>
            <SearchIcon />
            <InputBase placeholder="Search..." className={classes.input} />
          </div>
          <div className={classes.icons}>
            <Badge badgeContent={4} color="error" className={classes.icon} >
              <MailIcon color="white"/>
            </Badge>
            <Avatar
              alt="user"
              src="https://mui.com/static/images/avatar/1.jpg"
            />
          </div>
        </Toolbar>
      </AppBar>
    </>
  );
}

export default Navbar;
