import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import CreateIcon from '@mui/icons-material/Create';
import MenuIcon from '@mui/icons-material/Menu';
import CloudQueueIcon from '@mui/icons-material/CloudQueue';
import ListIcon from '@mui/icons-material/List';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import HomeIcon from '@mui/icons-material/Home';

function DrawerMUI () {

  const [open, setOpen ] = useState(false);

  const handleOpen = () => { 
    setOpen(true); 
  }

  const handleClose = () => { 
    setOpen(false); 
  }

  return (
    <Box>
      <IconButton onClick={ handleOpen } color='inherit'><MenuIcon /></IconButton>
      <Drawer anchor='left' open={ open } onClick={ handleClose }>
        <List>
          <ListItem button>
            <ListItemIcon><HomeIcon color='primary'/></ListItemIcon>
            <ListItemText primary='Tietoja'  />
          </ListItem>
          <ListItem button>
            <ListItemIcon><CreateIcon color='primary'/></ListItemIcon>
            <ListItemText primary='Lomake' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><RamenDiningIcon color='primary' /></ListItemIcon>
            <ListItemText primary='Resepti' />
          </ListItem>
          <ListItem button>
            <ListItemIcon><MenuIcon color='primary' /></ListItemIcon>
            <ListItemText primary='Menu' />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}

export default DrawerMUI;