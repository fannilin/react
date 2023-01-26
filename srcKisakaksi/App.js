import React from "react";
import { ThemeProvider, createTheme, CssBaseline, Toolbar, Typography } from "@mui/material";
import {  amber,  deepOrange, grey } from "@mui/material/colors";
import TabsMUI from "./mui/TabsMUI";
import MenuMUI from "./mui/MenuMUI";
import HeppaCardMUI from "./mui/HeppaCardMUI";
import CardsMUI from "./mui/CardsMUI";
import Kisalista from "./components/Kisalista";

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



const theme = createTheme ({
palette: {
  primary: {main: deepOrange[800], contrastText: '#FFFFFF'},
  secondary: {main: amber[500], contrastText: grey[50]},
  text: {primary: grey[700], secondary: deepOrange[800] },
  }
}
);


  function App() {
    return (
      <ThemeProvider theme={ theme }>
      <CssBaseline/>
   
   <TabsMUI kilpailu = { kilpailu } />
  
   
    </ThemeProvider>  
    );
  }

  export default App;
