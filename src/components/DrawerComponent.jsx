import React, { useState } from 'react';
import { Drawer } from '@mui/material';
import { List } from '@mui/material';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { IconButton } from '@mui/material';
import DehazeIcon from '@mui/icons-material/Dehaze';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
   link: {
      textDecoration: 'none',
      fontSize: 16,
      color: theme.palette.gray.fW600,
      fontWeight: 500,
      '&:hover': {
         color: 'black',
      },
   },
}));

function DrawerComponent() {
   const classes = useStyles();
   const [openDrawer, setOpenDrawer] = useState(false);

   return (
      <>
         <Drawer
            open={openDrawer}
            onClose={() => setOpenDrawer(false)}
            anchor="right"
         >
            <List>
               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <Link className={classes.link} to="/">
                        Home
                     </Link>
                  </ListItemText>
               </ListItem>

               <ListItem onClick={() => setOpenDrawer(false)}>
                  <ListItemText>
                     <Link className={classes.link} to="/jobs">
                        Jobs
                     </Link>
                  </ListItemText>
               </ListItem>

            </List>
         </Drawer>
         <IconButton onClick={() => setOpenDrawer(!openDrawer)}>
            <DehazeIcon sx={{ fontSize: 23 }} className={classes.navBtn} />
         </IconButton>
      </>
   );
}

export default DrawerComponent;
