import { createGlobalStyle } from 'styled-components';
export const colors = {
  primary: '#d1238b',
  secondary: '#eaa800',
};

export const maxW = 500;
export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
  ul { list-style: none; }
  button { background: transparent; border: 0; outline: 0 }
  a{
    color: black;
  }
  body {
    overscroll-behavior: none;
    margin: 0;
    height: 100vh;
  }
  
  #root {
    margin: 0 auto;
    max-width: ${maxW}px;
    width: 100%; 
    height: 100%;
    display: flex; 
    flex-direction: column;
    justify-content: space-between;
  }
`;
