import { Container } from '@mui/system';
import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Box from '@mui/material/Box';
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

 
function KisalistaHaku (props) {
   
    const [paikka, setPaikka] = useState('');
    const [haetaan, setHaetaan] = useState(false);
    const sarakkeet = [
        { field: 'paikka', headerName: 'Paikka' },
        { field: 'paiva', headerName: 'Päivä' },
        { field: 'taso', headerName: 'Taso' },
        { field: 'tulos', headerName: 'Tulos' },
        { field: 'kuvaus', headerName: 'Kuvaus', width: 400 },
    ]
    
    
    const muuta = (e) => {
        setPaikka(e.target.value);
        setHaetaan(false);
    };

    const hae = () => {
        setHaetaan(true);
    };

    let haku = "";

    if (haetaan) {
       
        let result = props.kilpailu.filter(kilpailu => kilpailu.paikka === paikka);

        if (result.length > 0) {
            
            haku = result.map(kilpailu => {
                return (
                   
                    
            
          <Grid sx={ { marginTop:1 , marginLeft:2} } item key={ kilpailu.id }>
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
                    }
                    
                ) 
           
        } else {
            haku = "Et ole kilpaillut täällä";
        }
    }
   
    return (
        <div>
            <form>
                <TextField label='Paikka' type='text' variant='outlined' className='paikkaetsin' value={ paikka } onChange={ (e) => muuta(e) } />&nbsp;
                <Button  className='hae' variant='contained' color='primary' value='Hae' size='large' onClick={ () => hae() } startIcon={<SearchIcon />}>Hae</Button>
            </form>
            { <div>{ haku }</div> }
            <Box style={{ width: 900 }} sx={{ margin:3 }}>
                     <DataGrid
                         rows={props.kilpailu}
                         columns={sarakkeet}
                         autoHeight={true}
                         pageSize={5}
                         rowsPerPageOptions={[4]}
                         disableColumnResize={true}
                     />
                 </Box>
        </div>
    )

}

export default KisalistaHaku;
