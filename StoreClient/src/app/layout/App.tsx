import { useState } from "react";
import Header from "./Header";
import { Container,  createTheme,  CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";


function App() {
 
  const[darkMode, setDarkMode] = useState(false);

  function toggleDarkMode(event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }){
    setDarkMode(event.target.checked);
  }
  
  const paletteType = darkMode ? 'dark' : 'light';
  const theme = createTheme({
  palette : {
    mode : paletteType,
    background :{
      default: paletteType === 'light' ? '#eaeaea' : '#121212'
    }
  }
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Header toggleDarkMode={toggleDarkMode}/>
        <Container>
          <Outlet />
        </Container>
      </ThemeProvider>
      
      
    </div>
  )
}

export default App
