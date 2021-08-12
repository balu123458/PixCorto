import {
  Grid,
  Link,
  makeStyles,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2b2b2a",

    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gridGap: "20px",
    marginTop: "5vh",
  },
  section1: {
    display: "inline-flex",
    flexDirection: "column",
    color: "#fdc8bc",
    alignItems: "center",
  },
  title: {
    fontSize: "1.5rem",
    color: "white",
    padding:"8px"
  },
  mobileview: {
    backgroundColor: "#ffeaa7",
    backgroundImage: "linear-gradient(315deg, #ffeaa7 0%, #000000 74%)",
    display: "grid",
    flexDirection: "column",
    marginTop: "5vh",
  },
});

const Footer = () => {
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  const classes = useStyles();
  return (
    <Grid className={isMatch ? classes.mobileview : classes.root}>
      <section className={classes.section1}>
        <Typography className={classes.title}>About PixCorto</Typography>
        <Link>Contact</Link>
        <Link>Faq</Link>
        <Link>Shipping & Returns</Link>
        <Link>Store Policy</Link>
        <Link>Privacy Policy</Link>
        <Link>Terms and Conditions</Link>
        <Link>Refund Policy</Link>
      </section>
      <div>part2</div>
      <div>part3</div>
    </Grid>
  );
};

export default Footer;
