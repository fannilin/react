import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from 'date-fns/locale/fi';

import axios from 'axios';

function KisalomakeMUI () {

  const [kilpailu, setValues] = useState({
    id: '',
    paikka: '',
    hevonen: '',
    paiva: new Date(),
    taso: '',
    tulos: '',
    kuvaus: ''
  });

  const [viesti, setViesti] = useState('');

  const muuta = (e) => {
    setValues({
      ...kilpailu,
      [e.target.name]: e.target.value
    });

    setViesti('');
  };

  const muutaSuurella = (e) => {
    setValues({
      ...kilpailu,
      [e.target.name]: e.target.value.toUpperCase()
    });
      
    setViesti('');
  };

 

  const lisaaKilpailu = async (e) => {
    const formData = {
      paikka: kilpailu.paikka,
      hevonen: kilpailu.hevonen,
      paiva: kilpailu.paiva.getFullYear() + '-' + (kilpailu.paiva.getMonth() + 1) + '-' + kilpailu.paiva.getDate(),
      taso: kilpailu.taso,
      tulos: kilpailu.tulos,
      kuvaus: kilpailu.kuvaus,
    }
  
    try {
      await axios.post('http://localhost:8080/kilpailu/add', formData);

      setValues({
            paikka: '',
            hevonen: '',
            paiva: new Date(),
            taso: '',
            tulos: '',
            kuvaus: ''
            
      });
      setViesti('Kilpailu lisättiin'); 

    } catch (error) {
      
      setViesti('Lisäys ei onnistunut');
    }

  }
   
  const tyhjenna = (e) => {
    setValues({
        paikka: '',
        hevonen: '',
        paiva: new Date(),
        taso: '',
        tulos: '',
        kuvaus: '' 
    });

    setViesti('');
  }

 

  const muutaPaiva = (e) => {
    setValues({
      ...kilpailu,
      paiva: e
     });

    setViesti('');
  };


  return (
  <Paper sx={ {padding:'40px', margin:'25px' } }>
    
    <Box 
        component='form' border={'none'} padding='25px'
        sx={ {'& .MuiTextField-root': { marginBottom: 2, backgroundColor: 'white'}} }>

      <TextField label='Paikka' name='paikka'  style= {{backgroundColor: 'white'}} value={ kilpailu.paikka }
        onChange={ (e) => muutaSuurella(e) } required fullWidth autoFocus />
     
      <TextField label='Hevonen' name='hevonen' style= {{backgroundColor: 'white'}} value={ kilpailu.hevonen }
        onChange={ (e) => muuta(e) } required fullWidth />  

<LocalizationProvider dateAdapter={AdapterDateFns} utils={DateFnsUtils} adapterLocale={fiLocale}>
        <DatePicker 
            inputFormat='dd.MM.yyyy'
            value={kilpailu.paiva}
            onChange={ (e) => muutaPaiva(e) }
            renderInput={ (params) => <TextField {...params} style= {{backgroundColor: 'white'}} required fullWidth /> }
        />
      </LocalizationProvider>

      <TextField label='Taso' name='taso' style= {{backgroundColor: 'white'}} value={ kilpailu.taso }
        onChange={ (e) => muuta(e) } required fullWidth />  

      <TextField label='Tulos' name='tulos' style= {{backgroundColor: 'white'}} value={ kilpailu.tulos }
        onChange={ (e) => muuta(e) } required fullWidth />  
		
      <TextField label='Oma analyysi' name='kuvaus' style= {{backgroundColor: 'white'}} value={ kilpailu.kuvaus }
        onChange={ (e) => muuta(e) } multiline rows='4' fullWidth />
		

      <Box sx={ {textAlign: 'center'} }>
        <Button onClick={ (e) => lisaaKilpailu(e) } variant='contained' sx={ {marginRight:3} } startIcon={ <CreateIcon /> }>Lisää</Button>
        <Button onClick={ (e) => tyhjenna(e) } variant='contained' color='secondary' startIcon={ <ClearIcon /> }>Tyhjennä</Button>
      </Box>
    </Box>

    <Typography sx={ {marginTop: 3} }>{ viesti }</Typography>
  </Paper>
  );
}

export default KisalomakeMUI;

