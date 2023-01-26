import React, {useState} from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import CreateIcon from '@mui/icons-material/Create';
import ListIcon from '@mui/icons-material/List';
import HomeIcon from '@mui/icons-material/Home';
import DrawerMUI from '../mui/DrawerMUI';
import RamenDiningIcon from '@mui/icons-material/RamenDining';

function MenuMUI () {
  const [anchorMenu, setMenuOpen] = useState(null);

  const menuOpen = (e) => { 
    setMenuOpen(e.currentTarget); 
  
  }
  const menuClose = () => { 
    setMenuOpen(null); 
  }

  return (
    <Box>
     
        <Toolbar>
          <IconButton onClick={ menuOpen } color='inherit'><MenuIcon /></IconButton>
        </Toolbar>
      

      <MenuList>
        <Menu
          anchorEl={ anchorMenu }
          open={ Boolean(anchorMenu) }
          onClose={ menuClose}>

          <MenuItem onClick={ menuClose }>
            <ListItemIcon><HomeIcon /></ListItemIcon>
            <ListItemText primary='Tietoja' />
          </MenuItem>
          <MenuItem onClick={ menuClose }>
            <ListItemIcon><CreateIcon /></ListItemIcon>
            <ListItemText primary='Lomake' />
          </MenuItem>
          <MenuItem onClick={ menuClose }>
            <ListItemIcon><RamenDiningIcon /></ListItemIcon>
            <ListItemText primary='Resepti' />
          </MenuItem>
          <MenuItem onClick={ menuClose }>
            <ListItemIcon><ListIcon /></ListItemIcon>
            <ListItemText primary='Menu' />
          </MenuItem>
        </Menu>
      </MenuList>
      <Toolbar><DrawerMUI></DrawerMUI></Toolbar>
  </Box>
  )
}

export default MenuMUI;
