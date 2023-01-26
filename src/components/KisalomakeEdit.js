import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CreateIcon from '@mui/icons-material/Create';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';
import { Alert } from '@mui/material';
import { useParams } from 'react-router';

function MatkalomakeEditMUI () {
    let { id, paikka, paiva, hevonen, taso, tulos, kuvaus} = useParams();
   

    let paivaTemp = paiva.split('.') // Pilkotaan palasiksi päivämäärän tekemiseksi fin muodosta -> Date muotoon

// tilamuuttujat ja niiden muuttamiskutsu
  const [kilpailu, setValues] = useState({
      id: id,
      paikka: paikka,
      paiva: new Date( paivaTemp[2], paivaTemp[1]-1, paivaTemp[0]), // Muodostetaan päivä
      hevonen: hevonen,
      taso: taso,
      tulos: tulos,
      kuvaus: kuvaus
    
  });

  const [viesti, setViesti] = useState('');

// Funktio, jolla muutetaan tilaa
  const muuta = (e) => {
     setValues({
       ...kilpailu,
       [e.target.name]: e.target.value
     });
   };

   const muutaSuurella = (e) => {
      setValues({
        ...kilpailu,
        [e.target.name]: e.target.value
      });
    };

   const muutaPaiva = date => {
     setValues({
      ...kilpailu,
      paiva: date
     });
   };


  const lisaaKilpailu = (e) => {
    setViesti('Muutosta ei viety bäkkiin');
  }

  const tyhjenna = (e) => {
    e.preventDefault();

    setValues({
        paikka: '',
        paiva: new Date(),
        hevonen: '',
        taso: '',
        tulos: '',
        kuvaus: '',
    });
  }

  

  return (
  <Paper sx={ {padding:'10px', margin:'10px' } }>

    <Box component='form'
      sx={ {'& .MuiTextField-root': { marginBottom: 2 }} }>

      <TextField label='Paikka' name='paikka' value={ kilpailu.paikka }
      onChange={ muutaSuurella } margin='normal' required fullWidth
      autoFocus/>
      
      <TextField label='Päivä' name='paiva' value={ kilpailu.paiva }
      onChange={ muuta }  margin='normal' required fullWidth />
      
      <TextField label='Hevonen' name='hevonen' value={ kilpailu.hevonen }
      onChange={ muuta } margin='normal' required fullWidth />

      <TextField label='Taso' name='taso' value={ kilpailu.taso }
      onChange={ muuta }  margin='normal' required fullWidth />

      <TextField label='Tulos' name='tulos' value={ kilpailu.tulos }
      onChange={ muuta }  margin='normal' required fullWidth />

      <TextField label='Oma analyysi' name='kuvaus' value={ kilpailu.kuvaus }
      onChange={ muuta } margin='normal' multiline rows='4' fullWidth />


      <div sx={ {textAlign: 'center'} }>
        <Button onClick={lisaaKilpailu} variant='contained' color='primary' sx={ {marginRight:3} }><CreateIcon />Muokkaa</Button>
        <Button onClick={tyhjenna} variant='contained' color='secondary'><ClearIcon />Tyhjennä</Button>
        
        <Alert variant="outlined" sx ={{marginTop: '10px'}} severity="info">
       HUOM Muutosta ei viedä tietokantaan!
        </Alert>
      </div>
    </Box>

    <Typography sx={ {marginTop: 3} }>{ viesti }</Typography>
  </Paper>
  );
}

export default MatkalomakeEditMUI;
