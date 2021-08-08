import React from "react";
import TextField from "@material-ui/core/TextField";
import {
  Button,
  FormControl,
  Grid,
  makeStyles,
  Paper,
  Typography,
} from "@material-ui/core";
import { display } from "@material-ui/system";

const useStyles = makeStyles({
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "8%",
  },
  color: {
    backgroundColor: "#ffeec6",
    // backgroundColor: "#fff",
    padding: "5%",
    borderRadius: "5px",
    width: "80%",
    display: "block",

    alignItems: "center",
  },
  spacing: {
    margin: "10px",
    // backgroundColor: "#2b2b2a",
    color:"white"
  },
  responsive: {
    display: "inline-flex",
    margin: "10px",
  },
  button: {
    backgroundColor: "#2b2b2a",
    color: "white",
    padding: "10px",
    marginTop: "15px",
    width: "8rem",
    alignSelf: "center",
    borderRadius: 0,
  },
    head: {
      fontSize:"35px",
      fontFamily:"inheret",
      color:"black"
    },
  title: {
    textAlign: "center",
  },
  form: {
    marginLeft: "auto",
    marginRight: "auto",
    width: "100%",
  },
 
  
});

const ContactUs = () => {
  const classes = useStyles();
  return (
    <div className={classes.center}>
      <Paper elevation={5} className={classes.color}>
        <div className={classes.title}>
          <Typography className={classes.head}>CONTACT US</Typography>
          
        </div>

        <FormControl className={classes.form} noValidate autoComplete="off">
          <Grid>
            <TextField
              fullWidth
              className={classes.spacing}
              id="standard-basic"
              label="Name"
              variant="filled"
            />
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                className={classes.spacing}
                id="outlined-basic"
                label="Phone Number"
                variant="filled"
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                className={classes.spacing}
                id="outlined-basic"
                label="Service"
                variant="filled"
              />
            </Grid>
          </Grid>
          <div>
            <TextField
              fullWidth
              className={classes.spacing}
              id="filled-basic"
              label="Mail"
              variant="filled"
            />
          </div>
          <div>
            <TextField
              fullWidth
              className={classes.spacing}
              id="filled-basic"
              label="Message"
              variant="filled"
            />
          </div>
          <Button className={classes.button}>Submit</Button>
        </FormControl>
      </Paper>
    </div>
  );
};

export default ContactUs;
