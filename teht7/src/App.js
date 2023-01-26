import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React from "react";
import { lightBlue, amber, brown, red } from "@mui/material/colors";
import TabsMUI from "./mui/TabsMUI";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Tieto from "./components/Tieto";
import LomakeMUI from "./mui/LomakeMUI";

const theme = createTheme ({
palette: {
  primary: {main: lightBlue[500], contrastText: '#FFFFFF'},
  secondary: {main: amber[300], contrastText: lightBlue[50]},
  text: {primary: lightBlue[500], secondary: brown[50] },
  typography: {fontFamily: "'Poppins' , 'sans-serif'"}
  }
}
);


  function App() {
    return (
      <ThemeProvider theme={ theme }>
        <CssBaseline/>
      <div>
    <TabsMUI/>
    </div> 
    <BrowserRouter>
<Routes>
<Route path='/' element={ <MenuMUI /> }>
<Route index element={ <Tieto /> } />
<Route path='lomake' element={ <LomakeMUI/> } />
<Route path='resepti' element={ <Resepti/> }/>
<Route path='lisaa' element={ <MenuMUI /> } />
<Route path='*' element={ <Tieto/> } />
</Route>
</Routes>
</BrowserRouter>

    </ThemeProvider>  
    );
  }

export default App;
