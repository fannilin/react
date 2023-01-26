import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Link from '@mui/material/Link';
import { Card, CardContent, CardMedia } from '@mui/material';
import KuvaSlider from './KuvaSlider';
import { SliderData } from '../components/SliderData';
import Breadcrumbs from '@mui/material/Breadcrumbs';



function ProjektiMUI () {



  return (

        <Card sx={{ padding: 8 }}>
          <CardMedia><Avatar alt="avatar" src="/kuvia/fanni.jpg" sx={{ width: 200, height: 200, marginLeft: '30%'}} /></CardMedia>

          <CardContent sx={{ marginLeft: '30%'
   }} >
            <h3>Fannin kilpailut sovellus, lopullinen harjoitustyö.
            </h3>
            <Typography> Reactin perusteet, MUI, React Router ja back-end yhdistettynä</Typography>
            <Typography>Tekijä: Fanni Lindqvist</Typography>
            <Typography>Alla olevista linkeistä lisää tietoa lajista</Typography>

            <Breadcrumbs aria-label="breadcrumb">
         <Link 
         target="_blank" 
         underline="hover" 
         color="inherit" 
         href="https://www.ratsastus.fi/">
           Ratsastus.fi
        </Link>

         <Link
          target="_blank" 
           underline="hover"
           color="inherit"
           href="https://online.equipe.com/" >
          Equipe Online
          </Link>

        <Link
          target="_blank" 
          underline="hover"
          color="inherit"
          href="https://kipa.ratsastus.fi/">
         KIPA -kisapalvelu
        </Link>
        </Breadcrumbs>

          </CardContent>

          <Box>
        <KuvaSlider slides={ SliderData }/>
        

        </Box>
        
        </Card>
       
  )
  
}



export default ProjektiMUI;
