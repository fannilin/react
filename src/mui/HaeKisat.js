  import React, { useState, useEffect } from 'react';
  import Typography from '@mui/material/Typography';
  import Kisalista from '../components/Kisalista';
  import KisalistaHaku from '../components/KisalistaHaku';

  import axios from 'axios';

  function HaeKisat () {
   
   const [kilpailu, setKilpailu] = useState([]);
   const [virhe, setVirhe] = useState('Haetaan');

   const haeKaikkiKisat = async () => {
    try {
      const response = await axios.get('http://localhost:8080/kilpailu/all');
      setKilpailu(response.data);
      setVirhe('');
    } catch (error) {
      setKilpailu([]);
      setVirhe('Tietojen haku ei onnistunut');
    }
  }
  
   useEffect( () => {
        haeKaikkiKisat(); 
   }, [])

   if (virhe.length > 0) {
     return ( <Typography>{ virhe }</Typography> );
   }

   if (kilpailu.length > 0) {
     return ( <Kisalista kilpailu={ kilpailu } /> );
   }

   return ( <Typography>Yhtään kilpailua ei ole</Typography> );
  }
  
  export default HaeKisat;
