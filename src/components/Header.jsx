import React, { useState } from "react";
import styled from "styled-components";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

// STYLING COMPONENTS
const Container = styled.header`
position: sticky;
top: 0;
background-color: ${(p) => p.theme.elColor};
font-size: 1rem;
padding: 26px 5vw;
z-index: 99;
display: flex;
align-items: center;
justify-content: space-between;
box-shadow ${(p) => p.theme.shadow};
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 1em;
  color: ${(p) => p.theme.textColor};
`;
const ThemeBtn = styled.p`
  font-size: 0.8em;
  display: flex;
  color: ${(p) => p.theme.textColor};
  gap: 8px;
  align-items: center;
  cursor: pointer;
  font-weight: bold;
`;

const Header = ({ theme, setTheme }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setTheme((prevTheme) => !prevTheme);
    setDarkTheme((p) => !p);
  };

  return (
    <Container>
      <Title>Where in the world?</Title>
      <ThemeBtn onClick={toggleTheme}>
        {!darkTheme ? <IoMoonOutline /> : <IoSunnyOutline />}
        {!darkTheme ? "Dark Mode" : "Light Mode"}
      </ThemeBtn>
    </Container>
  );
};

export default Header;
