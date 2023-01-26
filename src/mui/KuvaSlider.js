import react, { useState } from 'react';
import { SliderData } from '../components/SliderData';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Box, Button } from '@mui/material';



const KuvaSlider = ({ slides }) => {

    const [eka, setEka] = useState(0)
    const length = slides.length
    const seuraava= () => {
        setEka(eka === length -1 ? 0: eka + 1)
    }

    const edellinen = () => {
        setEka(eka === 0 ? length - 1 : eka -1)
    }
    
    

    return (
    <Box className='slider' sx= {{ position: 'relative', justifyContent: 'center',
    height: '600px',
    display: 'flex',
    alignItems: 'center'}}>



<Button startIcon = {<ArrowCircleLeftIcon />} className='nuolivasen' variant= 'contained' onClick={edellinen} sx = {{ 
position: 'absolute',
  top: '50%',
  left: '360px',
  fontSize: '12px',
  color: 'black' ,
  zIndex: '10',
  cursor: 'pointer',
  color: 'white',
  transform: 'scale(1.20)'}}>EDELLINEN</Button>



   { SliderData.map((slide, index) => {
       return (
        <div  className={index === eka ? 'aktiivinen' : 'slide'} key={index}>
            {index === eka && (<img src={ slide.image } alt='hyppy' className='image' />)}
        
        </div>
       )
   })}

<Button endIcon= {<ArrowCircleRightIcon  fontSize='inherit'/>} className='nuolioikea' variant='contained' onClick={seuraava} sx = {{ position: 'absolute',
 top: '50%',
  right: '360px',
  color: 'black',
  zIndex: '20',
  fontSize: '12px',
  cursor: 'pointer',
  color: 'white',
  transform: 'scale(1.20)'}}>SEURAAVA</Button>
 
    </Box>
    )
   }

   export default KuvaSlider;