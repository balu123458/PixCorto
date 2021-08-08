import React from "react";
import { Button, makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles({
  background: {
    backgroundColor: "#2b2b2a",
    width: "100vw",
    height: "100vh",
    position: "absolute",
  },
  center: {
    // display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
    marginTop: "15%",
  },
  line1: {
    color: "#fff",
    fontSize: "5vw",
    // 45px
    lineHeight: "7vw",
    // 60px
    fontWeight: 501,
  },
  line2: {
    color: "#d0b608",
    fontSize: "3.25vw",
    // 17px
    // lineHeight: "26px",
    padding: "30px 0",
    display: "block",
    fontWeight: 501,
    marginBottom: "10px",
  },
  button: {
    margin:"0 auto",
    display:"block",
    backgroundColor:"white",
    borderRadius:"0",
    padding:"20px"
  },
});
const Subcription = () => {
  const classes = useStyles();
  return (
    <div className={classes.background}>
      <div className={classes.center}>
        <Typography className={classes.line1}>Subscription Page</Typography>
        <Typography className={classes.line1}>
          Dummy Text Switch Printing
        </Typography>

        <Typography className={classes.line2}>
          Lorem Ipsum has been the industrys
        </Typography>
      </div>
      <Button className={classes.button}>Subscription</Button>
    </div>
  );
};

export default Subcription;
