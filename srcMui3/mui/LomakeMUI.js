import React from 'react';
import Box from '@mui/material/Box';

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import CreateIcon from '@mui/icons-material/Create';
import ClearIcon from '@mui/icons-material/Clear';
import Typography from '@mui/material/Typography';
import InputLabel from '@mui/material/InputLabel';
import AttachmentIcon from '@mui/icons-material/Attachment';
import Slider from '@mui/material/Slider';
import Switch from '@mui/material/Switch';

const marks = [
  {
    value: 0,
    label: '0',
  },
  {
    value: 1,
    label: '1',
  },
  {
    value: 2,
    label: '2',
  },
  {
    value: 3,
    label: '3',
  },
  {
    value: 4,
    label: '4',
  },
  {
    value: 5,
    label: '5',
  },
];
function LomakeMUI (){
  return(
    <Box  >
    <TextField sx={ {
    marginBottom: 2} } label= 'Nimi' name='nimi' variant= 'outlined' fullWidth></TextField>
   
    <Typography>Arvosana</Typography>
    <Slider defaultValue={3} steps={5} marks = {marks} max= {5} />
<Typography display='inline' variant= 'suositus'>Suosittelen</Typography> 
<Switch display='inline' variant= 'suositus'
 
  inputProps={{ 'aria-label': 'controlled' }}
/>
<br></br>
<Button variant= 'outlined' sx= {{marginRight: 2}} >Lisää</Button>
<Button variant= 'outlined' color= 'secondary'>Peruuta</Button>

</Box>
  )
}

export default LomakeMUI;