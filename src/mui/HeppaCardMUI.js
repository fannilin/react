import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

function HeppaCardMUI (props) {
  

  return (

    <Grid container spacing={ 4 } sx={ { marginTop:1} }>
      { 
      props.hevonen.map(hevonen => {
          return (
          <Grid item key={ hevonen.id }>
          <Card>
         <CardHeader
         title={ hevonen.nimi.toUpperCase() }
        subheader={ hevonen.lempinimi } />
       <CardContent>
           { hevonen.kuva ?
    <CardMedia sx={ {height: 250, width: 400} }
      image={ '/kuvia/' + hevonen.kuva }
      title={ hevonen.lempinimi } />
    : 
    <Typography sx={ {height: 100, width: 200} }>Ei kuvaa</Typography>
  }


                <Typography>{ hevonen.syntynyt }</Typography>
                <Typography>{ hevonen.rotu }</Typography>
                <Typography>{ hevonen.sukupuoli }</Typography>
              </CardContent>
 
            
            </Card>
          </Grid>
        )
      })
      
    }
   
    </Grid>
 
  )
}



export default HeppaCardMUI;
