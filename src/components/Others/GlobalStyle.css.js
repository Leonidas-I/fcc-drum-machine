import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
  background-color: #ffe033;
  font-family: Arial, Helvetica, sans-serif;
  user-select: none;
  }
  #App {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  }
`;
