import React from "react";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { Box } from "grommet";
import "./App.css";

function App() {
  return (
    <Box className="App">
      <Header />
      <Main />
      <Footer />
    </Box>
  );
}

export default App;
