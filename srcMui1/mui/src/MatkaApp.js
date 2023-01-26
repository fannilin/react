import React from 'react';
// import Matka from './components/Matka';
// import Matkalista from './components/Matkalista';
//import Matkalomake from './components/Matkalomake';
//import Kappale from './components/Kappale';
//import Avaruuskuva from './components/Avaruuskuva';
//import Astroidit from './components/Asteroidit';

import MatkalistaMUI from './mui/MatkalistaMUI';
import MatkalomakeMUI  from './mui/MatkalomakeMUI';

/*
const matka = { 
    id: 1, 
    otsikko: 'Lomalla', 
    paiva: '26.5.2022', 
    paikka: 'Lohja', 
    saa: 'Aurinkoista, 2', 
    kuvaus: 'Lomalla Lohjalla', 
}
*/
const matkat = [
    { id: 1,
    otsikko: 'Lomalla',
    paiva: '26.5.2022',
    paikka: 'Lohja',
    saa: 'Aurinkoista, 10',
    kuvaus: 'Lomalla Lohjalla',
    kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/tammi.PNG'
    },
    { id: 2,
    otsikko: 'Mökillä',
    paiva: '8.6.2022',
    paikka: 'Savonlinna',
    saa: 'Aurinkoinen, 21',
    kuvaus: 'Mökillä Itä-Suomessa',
    kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/lumpeet.PNG'
    },
    { id: 3,
    otsikko: 'Sukuloimassa',
    paiva: '20.5.2022',
    paikka: 'Vantaa',
    saa: 'Pilvinen, 9',
    kuvaus: 'Kahvihetki',
    kuva: 'http://myy.haaga-helia.fi/~marsi/pictures/kakku.jpg'
    }
    ];

function MatkaApp() {
    /* Täällä saa olla normaali ES kommentti */
    
    return (
    <div>
        {/* 
        <Matka tiedot={ matka } paiva={ '29.8.2022' }/> 
        <Matkalista matkat={ matkat } />
        <Matkalomake />
        <Kappale />
        <Avaruuskuva />
           <Astroidit />
        */}
        <MatkalistaMUI matkat={ matkat } />
        <MatkalomakeMUI />
    </div>
    );
}

export default MatkaApp;
