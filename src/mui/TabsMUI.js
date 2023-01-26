import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, Outlet } from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';




function TabsMUI(props) {
  const [value, setValue] = useState(0);

  const handleChange = (e, val) => {
    setValue(val);
  }



  return (
    <Box>
      <AppBar position='static'>

                <Typography variant='h5'
            sx={{ flexGrow: 1, textAlign: 'center' }} > FANNIN KILPAILUT
          </Typography>
      

        <Toolbar>
          <Tabs value={value} onChange={handleChange} indicatorColor='secondary' variant='fullWidth' centered textColor='inherit'
            sx={{ flexGrow: 1, textAlign: 'center' }}>
            
            <Tab label='Kilpailutulokset' icon={<HomeIcon />} component={Link} to='lista' />
            <Tab label='Lisää kilpailu' icon={<CreateIcon />} component={Link} to='lomake' />
            <Tab label='Hae kilpailuista' icon={<SearchIcon />} component={Link} to='haeKisa' />
            <Tab label='Hevoset' icon={<FavoriteIcon />} component={Link} to='hepat' />
            <Tab label='Projektista' icon={<AccountCircle />} component={Link} to='pro' />

          </Tabs>
          
        </Toolbar>
      </AppBar>
      <Outlet />
    </Box>

  )
}

export default TabsMUI;
