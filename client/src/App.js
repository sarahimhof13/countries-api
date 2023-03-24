import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./Themes";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home/Home";

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
        <Home/>
      </ThemeProvider>

    </div>
  );
}

export default App;
