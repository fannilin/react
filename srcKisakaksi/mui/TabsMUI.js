import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import ListIcon from '@mui/icons-material/List';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import KisalomakeMUI from './KisalomakeMUI';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Kisalista from '../components/Kisalista';
import KisalistaHaku from '../components/KisalistaHaku';
import HeppaCardMUI from './HeppaCardMUI';
import MenuMUI from './MenuMUI';
import { Typography } from '@mui/material';
import AccountCircle from '@mui/icons-material/AccountCircle';


const hevonen = [
  {
    id: 1,
    nimi: 'Commando',
    lempinimi: 'Kamu',
    syntynyt: '2005',
    rotu: 'Tanskalainen puoliverinen',
    sukupuoli: 'ruuna',
    kuva: 'kamu.jpg'
  },
  {
    id: 2,
    nimi: 'Luciferina LH',
    lempinimi: 'Luci',
    syntynyt: '2012',
    rotu: 'Holstainer',
    sukupuoli: 'tamma',
    kuva: 'luci.jpg'
  }
];


function TabsMUI(props) {
  const [value, setValue] = useState(0);

  const handleChange = (e, val) => {
    setValue(val);
  }

  return (
    <Box>
      <AppBar position='static'>
        <h2>
          <Typography variant='h5' 
            sx={{ flexGrow: 2, textAlign: 'center' } } >FANNIN KILPAILUT
          </Typography>
        </h2>
        <Toolbar>
          <Tabs value={value} onChange={handleChange} indicatorColor='secondary' variant='fullWidth' centered textColor='inherit'
            sx={{ flexGrow: 1, textAlign: 'center' }}>

            <Tab label='Kilpailutulokset' icon={<HomeIcon />} />
            <Tab label='Lisää kilpailu' icon={<CreateIcon />} />
            <Tab label='Hae kilpailuista' icon={<SearchIcon />} />
            <Tab label='Hevoset' icon={<ListIcon />} />
            <Tab label='Projektista' icon={<AccountCircle />} />

          </Tabs>
        </Toolbar>
      </AppBar>

      {value === 0 && <Kisalista kilpailu={props.kilpailu} />}
      {value === 1 && <KisalomakeMUI />}
      {value === 2 && <KisalistaHaku kilpailu={props.kilpailu} />}
      {value === 3 && <HeppaCardMUI hevonen={hevonen} />}
      {value === 4 && <MenuMUI />}

    </Box>

  )
}

export default TabsMUI;
