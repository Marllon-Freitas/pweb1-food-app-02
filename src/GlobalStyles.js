import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'arial', sans-serif;
  }

  html {
    height: 100vh;
    width: 100vw;
  }

  body {
    background-color: #001829;
  }

  :root {
    --gray-text-color: #000;
    --main-color: #0b6623;
    --admin-color: #9badb7;
    --title-font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    --text-font-size: clamp(1rem, 2.5vw, 1.5rem);
    --text-font-size-medium: clamp(0.7rem, 1vw, 0.9rem);
    --text-font-size-small: clamp(0.8rem, 1.5vw, 0.8rem);
    --border-radius: 0.5rem;
  }

  a {
    text-decoration: none;
    color: var(--gray-text-color);
  }
`;
