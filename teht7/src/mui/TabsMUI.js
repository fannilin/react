import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import ListIcon from '@mui/icons-material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import LomakeMUI from '../mui/LomakeMUI';
import Tieto from '../components/Tieto';
import Resepti from '../components/Resepti';
import MenuMUI from '../mui/MenuMUI';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import Typography from "@mui/material/Typography";



function TabsMUI (props) {
  const [value, setValue] = useState(0);

  const handleChange = (e, val) => {
    setValue( val );
  }

  return (
    <Box>
      <AppBar position='static'>
        <Toolbar>
          <Tabs value={ value } onChange={ handleChange } indicatorColor= 'secondary' variant='fullWidth' centered textColor='inherit'
          sx={ {flexGrow:1, textAlign:'center'} }>
            <Tab label='Tietoja' icon={ <HomeIcon /> }  />
            <Tab label='Lomake'   icon={ <CreateIcon /> } />
            <Tab label='Resepti'  icon={ <RamenDiningIcon /> } />
            <Tab label= 'Menu' icon={<ListIcon/>} />
          </Tabs>
        </Toolbar>
      </AppBar>

      { value === 0 && <Tieto /> }
      { value === 1 && <LomakeMUI /> }
      { value === 2 && <Resepti /> }
      { value === 3 && <MenuMUI /> }
   

    </Box>

  )
}

export default TabsMUI;
