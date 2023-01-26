import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import React from "react";
import { lightBlue, amber, brown, red } from "@mui/material/colors";
import TabsMUI from "./mui/TabsMUI";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";


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
   
    </ThemeProvider>  
    );
  }

export default App;
