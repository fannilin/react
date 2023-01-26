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

/*
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import DateFnsUtils from '@date-io/date-fns';
import fiLocale from 'date-fns/locale/fi';
*/

function MatkalomakeMUI () {

  const [matka, setValues] = useState({
      otsikko: '',
      paiva: new Date(),
      paikka: '',
      saa: '',
      kuvaus: '',
      kuva: []
  });

  const [viesti, setViesti] = useState('');

  const muuta = (e) => {
    setValues({
      ...matka,
      [e.target.name]: e.target.value
    });

    setViesti('');
  };

  const muutaSuurella = (e) => {
    setValues({
      ...matka,
      [e.target.name]: e.target.value.toUpperCase()
    });
      
    setViesti('');
  };

  const muutaKuva = (e) => {
    setValues({
      ...matka,
      kuva: e.target.files[0]
    });

    setViesti('');
  }

  const lisaaMatka = (e) => {

    setValues({
      otsikko: '',
      paiva: new Date(),
      paikka: '',
      saa: '',
      kuvaus: '',
      kuva: ''
    });

    setViesti('Lisättiin'); 
  }
   
  const tyhjenna = (e) => {

    setValues({
        otsikko: '',
        paiva: new Date(),
        paikka: '',
        saa: '',
        kuvaus: '',
        kuva: ''
    });

    setViesti('');
  }

  let kuvaNimi = '';
  if (matka.kuva !== null) {
    kuvaNimi = matka.kuva.name;
  }

  const muutaPaiva = (e) => {
    setValues({
      ...matka,
      paiva: e
     });

    setViesti('');
  };


  return (
    <Paper sx={ {padding:'10px', margin:'10px' } }>
    
    <Box
        component='form'
        sx={ {'& .MuiTextField-root': { marginBottom: 2 }, padding: 2} }>


      <TextField label='Otsikko' name='otsikko' value={ matka.otsikko } 
        onChange={ (e) => muutaSuurella(e) } required fullWidth autoFocus />
   
      <TextField label='Päivä' name='paiva' value={ matka.paiva }
        onChange={ muuta } required fullWidth />
   
{ /*
      <LocalizationProvider dateAdapter={AdapterDateFns} utils={DateFnsUtils} adapterLocale={fiLocale}>
            <DatePicker
               value={matka.paiva}
               onChange={ (e) => muutaPaiva(e) }
               renderInput={ (params) => <TextField {...params} required fullWidth /> }
            />
      </LocalizationProvider>
*/ }
      <TextField label='Paikka' name='paikka' value={ matka.paikka } 
        onChange={ (e) => muuta(e) } required fullWidth />
		
      <TextField label='Sää' name='saa' value={ matka.saa } 
        onChange={ (e) => muuta(e) } required fullWidth />
		
      <TextField label='Kuvaus' name='kuvaus' value={ matka.kuvaus }
        onChange={ (e) => muuta(e) } multiline rows='4' fullWidth />
		
      <Input accept='image/*' name='kuva' id='kuva' type='file'
        onChange={ (e) => muutaKuva(e) } sx={{display: 'none'}} />

      <InputLabel htmlFor='kuva'>
        <Typography sx={{ display:'inline'}}>Kuva</Typography>
        <Button component='span'>
            <AttachmentIcon />
        </Button>
        <Typography sx={{ display:'inline'}}>{ kuvaNimi }</Typography>
      </InputLabel>

      <Box sx={ {textAlign: 'center'} }>
        <Button onClick={ (e) => lisaaMatka(e) } variant='contained' sx={ {marginRight:3} } startIcon={ <CreateIcon /> }>Lisää</Button>
        <Button onClick={ (e) => tyhjenna(e) } variant='contained'  color='secondary' startIcon={ <ClearIcon /> }>Tyhjennä</Button>
      </Box>
    </Box>

    <Typography sx={ {marginTop: 3} }>{ viesti }</Typography>
    </Paper>
  );
}

export default MatkalomakeMUI;
