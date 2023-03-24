import React, { useState } from "react";
import "./App.scss";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Details from "./pages/details/Detail";
import Header from "./components/Header";
import Footer from "./components/Footer";

// LIGHT THEME COLOURS
const lightTheme = {
  id: 0,
  textColor: "hsl(200, 15%, 8%)",
  bgColor: "hsl(0, 0%, 98%)",
  elColor: "hsl(0, 0%, 100%)",
  shadow: "0 1px 8px -3px hsl(0, 0%, 52%)",
  btnShadow: "0 1px 2px 0px hsl(0, 0%, 52%)",
};

// DARK THEME COLOURS
const darkTheme = {
  id: 1,
  bgColor: "hsl(207, 26%, 17%)",
  textColor: "hsl(0, 0%, 100%)",
  elColor: "hsl(209, 23%, 22%)",
  shadow: "0 1px 8px -2px hsl(0, 0%, 10%)",
  btnShadow: "0 1px 2px 0px hsl(0, 0%, 10%)",
};

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <ThemeProvider theme={theme ? lightTheme : darkTheme}>
      <Header setTheme={setTheme} theme={theme} />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home setTheme={setTheme} theme={theme} />}/>
        <Route path={`/Details/` }element={<Details setTheme={setTheme} theme={theme} />}/>
      </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}

export default App;
