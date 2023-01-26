import React, { useState } from 'react';
import { Button, Card, Input, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const porssisahko = [
    { kello: "12.00", hinta: 12.20 },
    { kello: "13.00", hinta: 11.00 },
    { kello: "14.00", hinta: 10.15 },
    { kello: "15.00", hinta: 11.94 },
    { kello: "16.00", hinta: 14.66 },
    { kello: "17.00", hinta: 15.30 },
    { kello: "18.00", hinta: 16.54 },
    { kello: "19.00", hinta: 15.15 },
    { kello: "20.00", hinta: 11.85 },
    { kello: "21.00", hinta: 6.58 },
    { kello: "22.00", hinta: 7.70 },
    { kello: "23.00", hinta: 5.83 },
   ];

function Sahkohaku (props) {
   
    const [kello, setKello] = useState('');
    const [haetaan, setHaetaan] = useState(false);
    
    
    
    const muuta = (e) => {
        setKello(e.target.value);
        setHaetaan(false);
    };

    const hae = () => {
        setHaetaan(true);
    };

    let haku = "";

    if (haetaan) {
       
        let result = props.porssisahko.filter(porssisahko => porssisahko.kello === kello);

        if (result.length > 0) {
            
            haku = result.map(porssisahko => {
                return (
                   
                    
            
          <Grid sx={ { marginTop:1 , marginLeft:2} } item key={ porssisahko.kello }>
            <Card sx={{ maxWidth: 400 , maxHeight: 400, minHeight: 300 }}>
              <CardHeader
                title={'Kello: ' + porssisahko.kello }
                 />

              <CardContent>
                <Typography>{ 'Hinta: ' + porssisahko.hinta +'€' }</Typography>
                
              </CardContent>
 
              <CardActions>
                 <IconButton color='primary'><EditIcon /></IconButton>
                 <IconButton><DeleteIcon /></IconButton>
              </CardActions>
            </Card>
          </Grid>
             
                    
                    
                  
                       
                          
                        )
                    }
                    
                ) 
           
        } else {
            haku = "Tällä kellonajalla ei ole tulosta!";
        }
    }
   
    return (
        <div>
            <form>
                <TextField label='Kellon aika' type='text' variant='outlined' className='etsin' value={ kello } onChange={ (e) => muuta(e) } />&nbsp;
                <Button  className='hae' variant='contained' color='primary' value='Hae' size='large' onClick={ () => hae() } startIcon={<SearchIcon />}>Hae</Button>
            </form>
            { <div>{ haku }</div> }
          
        </div>
    )

}

export default Sahkohaku;