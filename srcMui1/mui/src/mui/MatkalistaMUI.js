import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function MatkalistaMUI (props) {
  
  return (
    <Grid container spacing={ 4 } >
      { 
      props.matkat.map(matka => {
        return (
          <Grid item key={ matka.id }>
            <Card>
              <CardHeader title={ matka.otsikko } />
              <CardContent>
                <CardMedia component='img' sx= { {height:100, width:200} } image={ matka.kuva } alt={ matka.otsikko } />
                <Typography>{ matka.kuvaus }</Typography>
                <Typography>{ matka.paiva }</Typography>
                <Typography>{ matka.saa }</Typography>
              </CardContent>

              <CardActions>
                <IconButton><EditIcon /></IconButton>
                <IconButton><DeleteIcon /></IconButton>
              </CardActions>
            </Card>
          </Grid>
        )
      })
    }
    </Grid>
  )
}

export default MatkalistaMUI;
