import React from 'react';
import Typography from '@mui/material/Typography';



import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import pink from '@mui/material/colors/pink';

import {  BrowserRouter, Route, Routes } from 'react-router-dom';
import SahkolistaMUI from './components/SahkolistaMUI';
import Sahkohaku from './components/Sahkohaku';
import Kirjasto from './components/Kirjasto';
import { teal } from '@mui/material/colors';
 

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
  
  const theme = createTheme({
    palette: {
      primary: {main: teal[50], contrastText: teal[800]},
      secondary: {main: pink[300], contrastText: '#FFFFFF'},
      text: {primary: teal[800], secondary: '#000000', contrastText: '#FFFFFF'},
      action: {active: pink[500], hover:pink[50], selected: pink[300], contrastText: '#FFFFFF' },
      background: {default: '#FFFFFF'}
     },
     typography: {
      fontFamily: "'Chilanka', 'cursive'",
    },
 });

function App() {
  return (
    <ThemeProvider theme={ theme }>
    <CssBaseline />
     {/*
      
      
        <Sahkohaku porssisahko= { porssisahko } />
        */}
       
      <SahkolistaMUI porssisahko={ porssisahko } />
      <Kirjasto />
  </ThemeProvider>
  );
 }

 export default App;