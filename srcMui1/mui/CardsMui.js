
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardHeader from '@mui/material/CardHeader'; 
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import AccountBox from '@mui/icons-material/AccountBox';


function CardsMui (props){
    return(
      <Grid container spacing= {4}>
        {
          props.tiedot.map(tieto => {
            return (
               
                <Grid item key={tieto.id} >
                 
                <Card sx =  {{maxWidth: 300}} >
                <Box sx= {{backgroundColor: '#e0f2f1', border: '1px solid #26a69a'}} >     
                <Button startIcon={<AccountBox/>} >Näytä</Button>
                <Button startIcon= {<DeleteIcon/>} color ={'secondary'} >Poista</Button>  
                <CardHeader title={tieto.otsikko} />
                <CardContent> 
                    <Typography> {tieto.paiva}</Typography>
                    </CardContent> 
                <CardMedia component='img' height='200'
                    image={tieto.picture} />
                 </Box>
                    </Card> 
                    
                    </Grid>
                    
          )} )
        }
        </Grid>
    ) 
  }
  export default CardsMui;