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

function Kisalista (props) {
  
  return (
    <Grid container spacing={ 4 } sx={ { marginTop:1} }>
      { 
      props.kilpailu.map(kilpailu => {
          return (
          <Grid item key={ kilpailu.id }>
            <Card sx={{ maxWidth: 400 , maxHeight: 400, minHeight: 300 }}>
              <CardHeader
                title={ kilpailu.paikka.toUpperCase() }
                subheader={ kilpailu.paiva } />

              <CardContent>
                <Typography>{ kilpailu.taso }</Typography>
                <Typography>{ kilpailu.tulos }</Typography>
                <Typography>{ kilpailu.kuvaus }</Typography>
              </CardContent>
 
              <CardActions>
                 <IconButton color='primary'><EditIcon /></IconButton>
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


export default Kisalista;


