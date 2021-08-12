import { Box, Button, Grid, Typography, useMediaQuery, useTheme } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  background: {
    marginTop:"5px",
    backgroundColor: "white",
    width: "90vw",
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius:"10px",
  },
  twodiv1: {
    display: "grid",
    gridTemplateColumns: "4fr 2fr",
    padding: "30px",
  },
  twodiv2: {
    display: "grid",
    gridTemplateColumns: "2fr 4fr",
    padding: "30px",
  },
  mobileview:{
    display: "grid",
    gridTemplateRows: "1fr 1fr",
  },
  img: {
    width: "100%",
  },
  padding: {
    padding: "15px",
  },
  text: {
    justifyContent: "center",
    alignItems: "center",
    padding: "30px",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: "10px",
    marginTop: "15px",
    width: "8rem",
    display: "block",
    marginRight: "auto",
  },
  topic:{
      fontSize:"2.5rem",
      paddingBottom:"10px"
  }
});

const Home2 = () => {
  const classes = useStyles();
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Box  container className={classes.background}>
      <Grid className={isMatch ? classes.mobileview : classes.twodiv1}>
        <Grid className={classes.padding}>
          <img
            className={classes.img}
            src="https://source.unsplash.com/user/erondu/1600x900"
          />
        </Grid>
        <Grid className={classes.text}>
          <Typography className={classes.topic}> PixCorto intro </Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <Button variant="contained" className={classes.button}>
            READ MORE
          </Button>
        </Grid>
      </Grid>
      <Grid className={isMatch ? classes.mobileview : classes.twodiv2}>
        <Grid className={classes.text}>
          <Typography className={classes.topic}> Events and Activities</Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <Button variant="contained" className={classes.button}>
            READ MORE
          </Button>
        </Grid>
        <Grid className={classes.padding}>
          <img
            className={classes.img}
            src="https://source.unsplash.com/user/erondu/1600x900"
          />
        </Grid>
      </Grid>
      <Grid className={isMatch ? classes.mobileview : classes.twodiv1}>
        <Grid className={classes.padding}>
          <img
            className={classes.img}
            src="https://source.unsplash.com/user/erondu/1600x900"
          />
        </Grid>
        <Grid className={classes.text}>
          <Typography className={classes.topic}> About PixCorto's </Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <Button variant="contained" className={classes.button}>
            READ MORE
          </Button>
        </Grid>
      </Grid>
      <Grid className={isMatch ? classes.mobileview : classes.twodiv2}>
        <Grid className={classes.text}>
          <Typography className={classes.topic}> About Team </Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <Button variant="contained" className={classes.button}>
            READ MORE
          </Button>
        </Grid>
        <Grid className={classes.padding}>
          <img
            className={classes.img}
            src="https://source.unsplash.com/user/erondu/1600x900"
          />
        </Grid>
      </Grid>
      <Grid className={isMatch ? classes.mobileview : classes.twodiv1}>
        <Grid className={classes.padding}>
          <img
            className={classes.img}
            src="https://source.unsplash.com/user/erondu/1600x900"
          />
        </Grid>
        <Grid className={classes.text}>
          <Typography className={classes.topic}> Testimonials and History </Typography>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <Button variant="contained" className={classes.button}>
            READ MORE
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home2;
