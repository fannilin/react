import React, { useState, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import HeppaCardMUI from './HeppaCardMUI';

import axios from 'axios';

function HaeHepat () {
 
 const [hevonen, setHevonen] = useState([]);
 const [virhe, setVirhe] = useState('Haetaan');

 const haeKaikkiHevoset = async () => {
  try {
    const response = await axios.get('http://localhost:5000/hevonen/all');
    setHevonen(response.data);
    setVirhe('');
  } catch (error) {
    setHevonen([]);
    setVirhe('Haku ei onnistunut');
  }
}

 useEffect( () => {
      haeKaikkiHevoset(); 
 }, [])

 if (virhe.length > 0) {
   return ( <Typography>{ virhe }</Typography> );
 }

 if (hevonen.length > 0) {
   return ( <HeppaCardMUI hevonen={ hevonen } /> );
 }

 return ( <Typography>Yhtään hevosta ei ole lisätty</Typography> );
}

export default HaeHepat;