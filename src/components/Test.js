import React, { useState } from "react";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { TestData } from "./TestData";
import {
  IconButton,
  makeStyles,
  Grid,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
  Button,
  Grow,
} from "@material-ui/core";

const useStyles = makeStyles({
  slider: {
    position: "relative",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  image: {
    width: "90%",
    // height: "400px",
    paddingLeft: "10px",
  },

  rightarrow: {
    position: "absolute",
    top: "50%",
    right: "32px",
    fontSize: "3rem",
    color: "#000",
    zIndex: 10,
  },

  leftarrow: {
    position: "absolute",
    top: "50%",
    left: "32px",
    fontSize: "3rem",
    color: "#000",
    zIndex: 10,
  },

  slide: {
    opacity: 0,
    // transitionDuration: "1s ease",
    // height:0,
    // width:0
    position:"absolute"
  },
  text: {
    padding: "25px",
    justifyContent: "center",
    alignItems: "center",
    display: "grid",
  },
  slideactive: {
    opacity: 1,
    transitionDuration: "1s",
    transform: "scale(1.08)",
  },

  sections: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    width: "90vw",
    padding: "25px",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: "5px",
  },
  respo: {
    display: "grid",
    gridTemplateRows: "1fr 1fr",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    marginTop: "15px",
    width: "8rem",
  },
});

const Test = ({ tests }) => {
  const classes = useStyles();
  const [current, setCurrent] = useState(0);
  const length = tests.length;
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  const prevTest = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const nextslide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(tests) || tests.length <= 0) {
    return null;
  }

  return (
    <div className={classes.slider}>
      <IconButton onClick={prevTest} className={classes.leftarrow}>
        <ArrowBackIosIcon />
      </IconButton>

      <IconButton onClick={nextslide} className={classes.rightarrow}>
        <ArrowForwardIosIcon />
      </IconButton>

      
      <Grid className={isMatch ? classes.respo : classes.sections}>
        <Grid className={classes.text}>
          {TestData.map((test, index) => {
            return (
              <div
                className={
                  index === current ? classes.slideactive : classes.slide
                }
                key={index}
              >
                {index === current && (
                  <img
                    src={test.image}
                    alt="travel"
                    className={classes.image}
                  />
                )}
              </div>
            );
          })}
        </Grid>
        <Grid className={classes.text}>
          {TestData.map((test, index) => {
            return (
              <div
                className={
                  index === current ? classes.slideactive : classes.slide
                }
                key={index}
              >
                {index === current && (
                  <Typography>{test.description}</Typography>
                )}
                 
                 <Button variant="contained"  className={classes.button}>
                  Read More
                </Button>
              </div>
             );
          })}
          {/* <div
            className={
             classes.slideactive
            }
          >
            <Typography> {tests[current].description}</Typography>

            <Button variant="contained" className={classes.button}>
              Read More
            </Button>
          </div> */}
        </Grid>
      </Grid>

    </div>
  );
};

export default Test;
