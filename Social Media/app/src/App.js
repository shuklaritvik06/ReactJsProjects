import { Grid, makeStyles } from "@material-ui/core";
import React from "react";
import Feed from "./components/Feed";
import LeftBar from "./components/Leftbar";
import Navbar from "./components/Navbar";
import RightBar from "./components/Rightbar";
import "./reset.css";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  }
}));


function App() {
  const classes = useStyles();
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feed />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
