
import React, {useState} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Box, TextField } from '@mui/material';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';

function KisalistaHaku () {
    const [kilpailu, setKilpailu ]= useState([]);
    const[virhe, setVirhe] = useState('');
    const[paikka, setPaikka] = useState('');

    const fetchUrl = async () => {
        try {
            const response = await fetch('http://localhost:8080/kilpailu/all/' + encodeURI(paikka));
            const json = await response.json();
            setKilpailu(json);
            console.log(json); // Tällä näet Codessa vastauksen palvelimen tuloksesta
            setVirhe('');
        } catch (error) {
            setVirhe('Haku ei onnistunut.');
        }
    }

    let haku = (e) => {
        if (paikka.length > 0) {
            fetchUrl();
   
        } else {
    setVirhe('Anna paikka');
    }
    }


    return (
        <div>
            <Box style={{ padding: '20px', marginTop: '20px', marginLeft: '20px',  marginRight: '20px', marginBottom: '20px', backgroundColor: 'whitesmoke'}} >
                
                <TextField label='Paikka' type='text' style={{ textTransform: 'uppercase' , backgroundColor: 'white'}} id='paikka' variant='outlined' name='paikka' value={ paikka } onChange={ (e) => setPaikka(e.target.value) } />&nbsp;
                <Button type='button' style= {{padding: '14px', paddingLeft: '20px', paddingRight: '20px'}} name='haku' variant='contained' color='primary' value='Hae' size='large' onClick={ (e) => haku(e) } startIcon={<SearchIcon />}>Hae</Button>
                </Box>
            {
                kilpailu.length > 0 && virhe.length === 0 ?
                <div>
               

<Grid  item key= {kilpailu.id} container spacing={ 2 } sx={ { padding: 1} }>
  { 
  kilpailu.map(kilpailu => {
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

        </Card>
      </Grid>
    )
  })
  
}

</Grid>
  
           
 
                </div>
           
           : <p>{ virhe }</p>
            }          
        </div>
    );
}
export default KisalistaHaku;