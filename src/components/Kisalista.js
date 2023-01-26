import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import axios from 'axios';
import HaeKisat from '../mui/HaeKisat';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import CloseIcon from '@mui/icons-material/Close';



function Kisalista (props) {

  const [viesti, setViesti] = useState('');
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  }


  const poista = async (id) => {
    try {
      await axios.get('http://localhost:8080/kilpailu/delete/' + id)
      setViesti('Poistettiin');
    } catch (error) {
      setViesti('Poisto ei onnistunut');
    }
    setOpen(true);
  }

  let dialog =   
    <Dialog onClick={handleClose} open={open}>
      <DialogContent>
        <DialogContentText color='primary'>{viesti}
        <IconButton onClick={handleClose}>
          <CloseIcon />
        </IconButton>
        </DialogContentText>
      </DialogContent>
    </Dialog>;

  if (viesti === 'Poistettiin') {
    return ( 
      <div>
        { dialog }
        <HaeKisat />
      </div> 
    )
  }
  
  if (props.kilpailu.length > 0) {
    return (
    <div>
    { dialog }
    <Grid container spacing={ 2 } sx={ { padding: 1} }>
      { 
      props.kilpailu.map(kilpailu => {
        let paiva = kilpailu.paiva.split('-');
        let uusiPaiva = paiva[2] + '.' + paiva[1] + '.' + paiva[0]; 

          return (
          <Grid sx= {{ marginTop: '40px'}} item key={ kilpailu.id }>
            <Card sx={{ maxWidth: 400 , maxHeight: 400, minHeight: 300 }}>
              <CardHeader
                title={ kilpailu.paikka.toUpperCase() }
                subheader={ uusiPaiva } />

              <CardContent>
                <Typography>{ kilpailu.taso }</Typography>
                <Typography>{ kilpailu.tulos }</Typography>
                <Typography>{ kilpailu.kuvaus }</Typography>
              </CardContent>
 
              <CardActions>
                 <IconButton color= 'secondary' component={ Link } to={ '/muokkaa/' + kilpailu.id + '/' + kilpailu.paikka + 
                    '/' + kilpailu.paiva + '/' + kilpailu.hevonen + '/' + kilpailu.taso + '/' + kilpailu.tulos +  '/' + kilpailu.kuvaus }><EditIcon /></IconButton>
                 <IconButton color='primary' onClick={() => poista(kilpailu.id)}><DeleteIcon /></IconButton>
              </CardActions>
            </Card>
          </Grid>
        )
      })
    }
    </Grid>

     
      </div>
    )
  }

  return ( <Typography>Yhtään kilpailua ei vielä ole</Typography> );
}

export default Kisalista;

  
 