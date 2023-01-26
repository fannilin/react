import React from "react";
import Kisalomake from './components/Kisalomake';
import Kisalista from './components/Kisalista';
import KisalistaHaku from "./components/KisalistaHaku";



const kilpailu = [
  {id: 1, paikka: 'Nova',
    hevonen: 'Kamu',
    paiva: '15.5.2022',
    taso: '120 cm',
    tulos: '4 vp',
    kuvaus: 'Hyvä rata, aloitus alitempossa mistä kolmoselta puomi',
  },
  { id:2,paikka: 'Aino',
  hevonen: 'Kamu',
  paiva: '22.5.2022',
  taso: '115 cm',
  tulos: '0 vp',
  kuvaus: 'Aloitin vähän huolimattomasti, mutta Kamu super ja sijoitus. Rata parani loppua kohden' ,
  },
  { id:3, paikka: 'Ypäjä',
  hevonen: 'Kamu',
  paiva: '12.6.2022',
  taso: '115 cm Small GP',
  tulos: '12 vp',
  kuvaus: 'Oli vaikea löytää rytmiä ja ratsastin jännittyneesti, oli kuitenkin hauskaa',
  }
];

function App() {
  return (
   <div>
    <h1>Sinun kilpailutulokseksi</h1>
  
    <h3>Lisää uusi kilpailutulos</h3>
    <Kisalomake />
    
    <h3>Hae kilpailutulos paikan mukaan</h3>
      <KisalistaHaku kilpailu={ kilpailu } />

    <h3>Kaikki kilpailu tulokset</h3>
      <Kisalista kilpailu={ kilpailu } />

    
    
    </div>
  );
}

export default App;
