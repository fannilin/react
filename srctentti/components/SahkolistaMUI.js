import React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import {useState} from 'react';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import Box from '@mui/material/Box';
import { Button, Input, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';



function SahkolistaMUI (props) {

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
      <><div>
      <form>
        <TextField label='Kellon aika' type='text' variant='outlined' className='paikkaetsin' value={ kello } onChange={(e) => muuta(e)} />&nbsp;
        <Button className='hae' variant='contained' color='primary' value='Hae' size='large' onClick={() => hae()} startIcon={<SearchIcon />}>Hae</Button>
      </form>
      {<div>{haku}</div>}

    </div><Grid container spacing={4} sx={{ marginTop: 1 }}>
        {props.porssisahko.map(porssisahko => {


          return (


            <Grid item key={porssisahko.kello}>
              <Card>
                <CardHeader
                  title={'Kello: ' + porssisahko.kello} />

                <CardContent>

                  <Typography>{'Hinta: ' + porssisahko.hinta + ' €'}</Typography>

                </CardContent>


              </Card>
            </Grid>
          );
        })}
      </Grid></>
  )
}

export default SahkolistaMUI;
