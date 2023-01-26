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
import SearchIcon from '@mui/icons-material/Search';
import Avatar from '@mui/material/Avatar';
import { Container } from '@mui/system';


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
            <ListItemText primary='Kilpailutulokset' />
          </MenuItem>
          <MenuItem onClick={ menuClose }>
            <ListItemIcon><CreateIcon /></ListItemIcon>
            <ListItemText primary='Lisää kilpailu' />
          </MenuItem>
          <MenuItem onClick={ menuClose }>
            <ListItemIcon><SearchIcon /></ListItemIcon>
            <ListItemText primary='Hae kilpailu' />
          </MenuItem>
          <MenuItem onClick={ menuClose }>
            <ListItemIcon><ListIcon /></ListItemIcon>
            <ListItemText primary='Hevoset' />
          </MenuItem>
        </Menu>
      </MenuList>
      <Container maxWidth='400'><Avatar alt="avatar" src="/kuvia/fanni.jpg" sx= {{ width: 200, height: 200 }}/>

      <h3>Fannin kilpailut sovellus, harjoitustyön 2-osa: MUI, jossa pyritty käyttämään MUI:n ratkaisuja monipuolisesti
        kokeillen.
      </h3>
      <h4>Tekijä: Fanni Lindqvist</h4>
      
      </Container>
  </Box>
  )
}

export default MenuMUI;
