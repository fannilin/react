import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CardMUI (props) {
  return (
    <Box>
    {
        props.kilpailu.map(kilpailu => {
           return (
            <Card key={kilpailu.id} sx={{ maxWidth: 300 }}>
                <CardHeader
                     title={kilpailu.paikka} />
                <CardContent>
                        <Typography>{ kilpailu.paiva }</Typography>
                       <Typography> { kilpailu.taso }</Typography>
                        <Typography>{ kilpailu.tulos }</Typography>
                        <Typography>{kilpailu.kuvaus}</Typography>
                </CardContent>
                <CardActions>
                    <Button>Muuta</Button>
                </CardActions>
            </Card>
            )
        })
    }
    </Box>
  )
}

export default CardMUI;
