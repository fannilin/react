import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Toolbar, Typography } from "@mui/material";
import {  amber,  deepOrange, grey, orange } from "@mui/material/colors";
import TabsMUI from "./mui/TabsMUI";
import ProjektiMUI from "./mui/ProjektiMUI";
import KisalomakeMUI from "./mui/KisalomakeMUI";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import KisalistaHaku from "./components/KisalistaHaku";
import KisalomakeEdit from "./components/KisalomakeEdit";
import HaeKisat from "./mui/HaeKisat";
import HaeHepat from "./mui/HaeHepat";



/*
const kilpailu = [
  {id: 1, paikka: 'nova',
    hevonen: 'Kamu',
    paiva: '15.5.2022',
    taso: '120 cm',
    tulos: '4 vp',
    kuvaus: 'Aloitus alitempossa, minkä takia kolmoselta puomi. Tulin liian lähelle estettä, koska huonon rytmin takia en uskaltanut ottaa etenevää paikkaa.',
  },
  { id:2,paikka: 'aino',
  hevonen: 'Kamu',
  paiva: '22.5.2022',
  taso: '115 cm',
  tulos: '0 vp',
  kuvaus: 'Aloitin vähän huolimattomasti, mutta Kamu super ja sijoitus. Rata parani loppua kohden ja sain hyvän tasaisen rytmin.' ,
  },
  { id:3, paikka: 'ypäjä',
  hevonen: 'Kamu',
  paiva: '12.6.2022',
  taso: '115 cm Small GP',
  tulos: '12 vp',
  kuvaus: 'Oli vaikea löytää rytmiä ja ratsastin jännittyneesti, oli kuitenkin hauskaa! Pitää vain harjoitella lisää nurmella.',
  },
  { id:4, paikka: 'ypäjä',
  hevonen: 'Kamu',
  paiva: '13.6.2022',
  taso: '120 cm seniori Derby',
  tulos: '8 vp',
  kuvaus: 'Parempaa tekemistä kuin eilen. Nurmihokit ehkä jarrutti vähän liikaa, loppuradasta alastulot vähän töksähteleviä'
},
{id: 5, paikka: 'nova',
hevonen: 'Kamu',
paiva: '7.7.2022',
taso: '120 cm',
tulos: '0 vp',
kuvaus: 'Hieno rata, alusta asti hyvä rytmi ja muistin suoristaa hevosta lähestymissä. 2.sija!',
},
];


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
*/


const theme = createTheme ({
palette: {
  primary: {main: deepOrange[900], contrastText: '#FFFFFF'},
  secondary: {main: orange[500], contrastText: grey[50]},
  text: {primary: grey[700], secondary: deepOrange[800] },
  },
typography: {
    fontFamily: "'Ubuntu', sans-serif;"
    }
  
}
);


  function App() {
    return (
      <ThemeProvider theme={ theme }>
      <CssBaseline/>
        <BrowserRouter>
        <Routes>
<Route path='/' element={ <TabsMUI />}>

<Route path='lista' element={ <HaeKisat /> } />
<Route path='lomake' element={ <KisalomakeMUI /> } />
<Route path='haeKisa' element={  <KisalistaHaku />} />
<Route path='hepat' element={ <HaeHepat/> }/>
<Route path='pro' element={ <ProjektiMUI /> } />
<Route path='muokkaa/:id/:paikka/:paiva/:hevonen/:taso/:tulos/:kuvaus' element={<KisalomakeEdit /> } />
<Route path='*' element={ <Typography>Väärä reititys</Typography> } />
</Route>
</Routes>
</BrowserRouter>
    </ThemeProvider>  
    );
  }

export default App;
