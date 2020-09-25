import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: linear-gradient(#0A1C26, #081A23);
    color: white;
    font: 400 16px 'Poppins', 'sans-serif';
  }
`;