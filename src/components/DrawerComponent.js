import { React, useState } from "react";
import ListItem from "@material-ui/core/ListItem";

import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles, Drawer, IconButton, List,Paper, Box,} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";

import CloseIcon from '@material-ui/icons/Close';

import { NavLink } from "react-router-dom";


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    
  },
  root: {
      width: '100vw',
      height: '100vh',
      display:'grid',
      justifyItems:'center',
      paddingTop:'10vh',
    
  },
  menuicon:{
    marginRight:'auto'
    // order:'1',
    // display:'flex',
    // flexGrow:1
  },
  drawItems: {
    textDecoration: "none",
   color:'navyblue',
    fontFamily: "Ubuntu",
  }
}));

const DrawerComponent = () => {
  const classes = useStyles();
  

 
 

const onClose=({onClick}) => setopenDrawer(false)
  const [openDrawer, setopenDrawer] = useState(false);
  return (
    <div display='flex'  className={classes.menuicon}>
      <Drawer
        anchor="left"
        onClose={() => setopenDrawer(false)}
        open={openDrawer}
      >
          <IconButton  onClick={onClose}>
                  <CloseIcon />
              </IconButton>
          <Paper component={Box} className={classes.root}>
              
        <List className={classes.drawer}>
          <ListItem button >
          
            <NavLink className ={classes.drawItems} to='/PixCorto'> <ListItemText primary="Home"  onClick={onClose} /></NavLink>
          </ListItem>
          <ListItem button>
            
            <NavLink className ={classes.drawItems} to='/events'><ListItemText primary="Events"  onClick={onClose}/> </NavLink>
          </ListItem>
          <ListItem button>
            
            <NavLink className ={classes.drawItems} to='/discussions'><ListItemText primary="Discussions"  onClick={onClose}/> </NavLink>
          </ListItem>
          <ListItem button>
            
            <NavLink className ={classes.drawItems} to='/contactus'> <ListItemText primary="Contact Us"  onClick={onClose}/> </NavLink>
          </ListItem>
          <ListItem button>
            
            <NavLink className ={classes.drawItems} to='/subscription'> <ListItemText primary="Subscription"  onClick={onClose}/> </NavLink>
          </ListItem>
        </List>
        </Paper>
      </Drawer>
      <div  >
      <IconButton  onClick={() => setopenDrawer(!openDrawer)}>
        <MenuIcon />
      </IconButton>
      </div>
    </div>
  );
};

export default DrawerComponent;
