import { useState } from "react";
import Catalog from "../../features/Catalog";
import Header from "./Header";
import { Container,  createTheme,  CssBaseline, ThemeProvider } from "@mui/material";


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
          <Catalog />
        </Container>
      </ThemeProvider>
      
      
    </div>
  )
}

export default App
