import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import CreateIcon from '@mui/icons-material/Create';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import AttachmentIcon from '@mui/icons-material/Attachment';
import { red } from '@mui/material/colors';


function KisalomakeMUI () {

  const [kilpailu, setValues] = useState({
      hevonen: '',
      paikka: '',
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



  const lisaaKilpailu = (e) => {

    setValues({
      hevonen: '',
      paiva: new Date(),
      paikka: '',
      taso: '',
      tulos: '',
      kuvaus: ''
    });

    setViesti('Lisättiin'); 
  }
   
  const tyhjenna = (e) => {

    setValues({
        hevonen: '',
        paiva: new Date(),
        paikka: '',
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
    <Paper sx={ {padding:'10px', margin:'10px' } }>
    
    <Box 
        component='form'
        sx={ {'& .MuiTextField-root': { marginBottom: 2 }, padding: 2} }>


      <TextField label='Paikka' name='paikka' value={ kilpailu.paikka } 
        onChange={ (e) => muutaSuurella(e) } required fullWidth autoFocus />
   
      <TextField label='Päivä' name='paiva' value={ kilpailu.paiva }
        onChange={ muuta }  fullWidth />
   
{ /*
      <LocalizationProvider dateAdapter={AdapterDateFns} utils={DateFnsUtils} adapterLocale={fiLocale}>
            <DatePicker
               value={matka.paiva}
               onChange={ (e) => muutaPaiva(e) }
               renderInput={ (params) => <TextField {...params} required fullWidth /> }
            />
      </LocalizationProvider>
*/ }
      <TextField label='Hevonen' name='hevonen' value={ kilpailu.hevonen } 
        onChange={ (e) => muuta(e) }  fullWidth />
		
      <TextField label='Taso' name='taso' value={ kilpailu.taso } 
        onChange={ (e) => muuta(e) }  fullWidth />
		
      <TextField label='Tulos' name='tulos' value={ kilpailu.tulos }
        onChange={ (e) => muuta(e) } fullWidth />
		
        <TextField label='Oma analyysi' name='kuvaus' value={ kilpailu.kuvaus }
        onChange={ (e) => muuta(e) } multiline rows='4' fullWidth />

   

      <Box sx={ {textAlign: 'center'} }>
        <Button onClick={ (e) => lisaaKilpailu(e) } variant='contained' sx={ {marginRight:3} } startIcon={ <CreateIcon /> }>Lisää</Button>
        <Button onClick={ (e) => tyhjenna(e) } variant='contained'  color='secondary' startIcon={ <ClearIcon /> }>Tyhjennä</Button>
      </Box>
    </Box>

    <Typography sx={ {marginTop: 3} }>{ viesti }</Typography>
    </Paper>
  );
}

export default KisalomakeMUI;
